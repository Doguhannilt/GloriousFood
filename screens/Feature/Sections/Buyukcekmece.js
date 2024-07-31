import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FeaturedLibraryBuyukcekmece } from '../../../library/SectionsLibrary/Buyukcekmece';
import { takeAllInformation } from '../../../redux/slices/hotelInformation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';



export default function IstanbulBuyukcekmeceFeatured() {
    const dispatch = useDispatch();
    const navigation = useNavigation()

    const handlePress = (id) => {
        const selectedRestaurant = FeaturedLibraryBuyukcekmece.find(restaurant => restaurant.id === id);

        if (selectedRestaurant) {
            dispatch(takeAllInformation(selectedRestaurant));
            navigation.navigate('Details'); // Navigation için `navigation`'ı edinin
        }
    };
    return (
        <View className="pl-4">
            <Text className="text-2xl font-bold ml-2">Istanbul - Buyukcekmece</Text>
            <Text className="text-sm text-gray-300 ml-2">Buyukcekmece dishes for you!</Text>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 30, paddingTop: 10 }}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {FeaturedLibraryBuyukcekmece.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)} className="flex flex-col items-center ml-2">
                        <Image
                            className="w-56 h-56 rounded"
                            source={{ uri: item.ImgUrl }} />
                        <View className="w-56 mt-2">
                            <Text className="font-bold text-xl">{item.Title}</Text>
                            <Text className="text-gray-600 text-sm overflow-hidden" numberOfLines={2}>
                                {item.Description}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}