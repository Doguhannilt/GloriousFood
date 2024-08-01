import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FeaturedLibraryKadikoy } from '../../../library/SectionsLibrary/Kadikoy';
import { takeAllInformation } from '../../../redux/slices/hotelInformation';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';



export default function IstanbulKadikoyFeatured() {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const handlePress = (id) => {

        const selectedRestaurant = FeaturedLibraryKadikoy.find(restaurant => restaurant.id === id);
        console.log(selectedRestaurant)

        if (selectedRestaurant) {
            dispatch(takeAllInformation(selectedRestaurant));
            navigation.navigate('Details');
        }


    };

    return (
        <View className="pl-4">
            <Text className="text-2xl font-bold ml-2">Istanbul - Kadikoy</Text>
            <Text className="text-sm text-gray-300 ml-2">Kadikoy dishes for you!</Text>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {FeaturedLibraryKadikoy.map((item) => (
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