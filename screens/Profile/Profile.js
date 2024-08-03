import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/api/auth/authSlice';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.auth.userInfo);
    const navigation = useNavigation()

    const handleCards = () => {
        navigation.navigate('Cards')
    }

    const handleLogout = () => {
        dispatch(logout());
        navigation.navigate('Home')
    };

    return (
        <View className="flex-1 bg-white p-4">
            <View className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                <Text className="text-lg font-bold mb-2">Profile</Text>
                {userInfo ? (
                    <View>
                        <Text className="text-gray-700">Email: {userInfo.email}</Text>
                        <Text className="text-gray-500 text-sm">ID: {userInfo._id}</Text>
                    </View>
                ) : (
                    <Text className="text-gray-500">No user information available.</Text>
                )}
            </View>

            {/* CARDS */}
            <TouchableOpacity
                onPress={handleCards}
                className="bg-gray-500 p-3 mb-4 rounded-lg shadow-md"
            >
                <Text className="text-white text-center text-lg font-bold">Cards</Text>
            </TouchableOpacity>

            {/* LOGOUT */}
            <TouchableOpacity
                onPress={handleLogout}
                className="bg-red-500 p-3 rounded-lg shadow-md"
            >
                <Text className="text-white text-center text-lg font-bold">Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Profile;
