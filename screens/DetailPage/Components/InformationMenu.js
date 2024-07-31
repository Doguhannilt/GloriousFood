import { View, Text, Linking } from 'react-native';
import React from 'react';

const InformationMenu = ({ restaurant }) => {
    return (
        <View className="p-4 bg-gray-50">
            <Text className="text-2xl font-bold mb-2">Information</Text>
            <View className="mb-4">
                <Text className="text-lg font-semibold text-gray-800">Address:</Text>
                <Text className="text-gray-600">{restaurant.Address}</Text>
            </View>
            <View className="mb-4">
                <Text className="text-lg font-semibold text-gray-800">Phone:</Text>
                <Text
                    className="text-blue-600"
                    onPress={() => Linking.openURL(`tel:${restaurant.Phone}`)}
                >
                    {restaurant.Phone}
                </Text>
            </View>
            <View className="mb-4">
                <Text className="text-lg font-semibold text-gray-800">Website:</Text>
                <Text
                    className="text-blue-600"
                    onPress={() => Linking.openURL(restaurant.Website)}
                >
                    {restaurant.Website}
                </Text>
            </View>
            <View>
                <Text className="text-lg font-semibold text-gray-800">Opening Hours:</Text>
                <Text className="text-gray-600">{restaurant.OpeningHours}</Text>
            </View>
        </View>
    );
};

export default InformationMenu;
