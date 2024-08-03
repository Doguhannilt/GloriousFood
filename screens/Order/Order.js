import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';


    // REDUX
import { useSelector, useDispatch } from 'react-redux';
import { clearCost, decrementQuantity, removeItem, incrementQuantity } from '../../redux/slices/OrderSlice';
import { fetchUserInfoFromStorage } from '../../redux/api/auth/authSlice';


const OrderScreen = () => {
    
    const [userChecked, setUserChecked] = useState(false);


    const dispatch = useDispatch();
    const items = useSelector((state) => state.order.items);
    const payment = useSelector((state) => state.order.payment);
    const userInfo = useSelector((state) => state.auth.userInfo);


    // USEEFFECT
    useEffect(() => {
        const checkUserInfo = async () => {
            await dispatch(fetchUserInfoFromStorage());
            setUserChecked(true);
        };
        checkUserInfo();
    }, [dispatch]);

    useEffect(() => {
        if (userChecked && !userInfo) {
            dispatch(clearCost());
        }
    }, [userInfo, userChecked, dispatch]);



    // FUNCTIONS
    const handleIncrement = (itemId) => {
        dispatch(incrementQuantity(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementQuantity(itemId));
    };

    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };

    const handleClearOrders = () => {
        dispatch(clearCost());
    };

    const renderItem = ({ item }) => (
        <View className="flex-row justify-between items-center p-4 mb-2 bg-white rounded-lg shadow-md border border-gray-300">
            <View className="flex-1">
                <Text className="text-lg font-semibold text-gray-800">{item.Dish}</Text>
                <Text className="text-lg font-medium text-gray-600">{item.Price}</Text>
            </View>
            <View className="flex-row items-center">
                <TouchableOpacity onPress={() => handleDecrement(item.id)} className="px-2 py-1 bg-gray-300 rounded-lg">
                    <Text className="text-xl font-bold text-gray-800">-</Text>
                </TouchableOpacity>
                <Text className="text-lg font-semibold mx-2">{item.quantity}</Text>
                <TouchableOpacity onPress={() => handleIncrement(item.id)} className="px-2 py-1 bg-gray-300 rounded-lg">
                    <Text className="text-xl font-bold text-gray-800">+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handleRemove(item.id)} className="ml-4 px-3 py-1 bg-red-500 rounded-lg">
                <Text className="text-white font-semibold">Remove</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-gray-100 p-4">
            <View className="flex-row justify-between items-center mb-4">
                <Text className="text-2xl font-bold text-gray-800">Your Orders</Text>
                <TouchableOpacity
                    onPress={handleClearOrders}
                    className="px-4 py-2 bg-red-500 rounded-lg"
                >
                    <Text className="text-white font-semibold">Clear All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<Text className="text-center text-gray-600">No orders yet</Text>}
            />
            <View className="mt-4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
                <Text className="text-xl font-bold text-gray-800">Total Cost</Text>
                <Text className="text-2xl font-semibold text-gray-900">${payment.toFixed(2)}</Text>
            </View>
        </SafeAreaView>
    );
};

export default OrderScreen;
