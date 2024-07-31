import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState } from 'react';


const OrderMenu = ({ restaurant }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const menuList = restaurant.Menu;

    const handleItemPress = (item) => {
        console.log(item)
        setSelectedItem(item);
        ToastAndroid.show(`${item.Dish} is added to your cart.`, ToastAndroid.SHORT);

    };

    return (
        <View className="p-4 bg-gray-100">
            <Text className="text-2xl font-bold mb-4">Menu - {restaurant.Cuisine} Cuisine</Text>
            {menuList.map((item, id) => (
                <TouchableOpacity
                    key={id}
                    onPress={() => handleItemPress(item)}
                    className="mb-4 p-4 bg-white rounded-lg shadow-md border border-gray-300"
                >
                    <Text className="text-lg font-semibold text-gray-800">{item.Dish}</Text>
                    <Text className="text-sm text-gray-600">{item.Price}</Text>
                </TouchableOpacity>
            ))}
            {selectedItem && (
                <View className="mt-4 p-4 bg-white rounded-lg shadow-md border border-gray-300">
                    <Text className="text-xl font-bold text-gray-800">{selectedItem.Dish}</Text>
                    <Text className="text-md text-gray-600">Price: {selectedItem.Price}</Text>
                </View>
            )}
        </View>
    );
};

export default OrderMenu;
