import { View, Text, ScrollView, Image, TouchableOpacity, Animated } from 'react-native';
import React, { useRef } from 'react';
import { FeaturedLibraryFatih } from '../../../library/SectionsLibrary/Fatih';
import { takeAllInformation } from '../../../redux/slices/hotelInformation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function IstanbulFatihFeatured() {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userInfo = useSelector(state => state.auth.userInfo);
    const scrollViewRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollAmount = 300; // Kaydırma miktarı

    const handlePress = (id) => {
        if (userInfo) {
            const selectedRestaurant = FeaturedLibraryFatih.find(restaurant => restaurant.id === id);
            console.log(selectedRestaurant);

            if (selectedRestaurant) {
                dispatch(takeAllInformation(selectedRestaurant));
                navigation.navigate('Details');
            }
        } else {
            navigation.navigate('Auth');
        }
    };

    const scrollTo = (direction) => {
        if (scrollViewRef.current) {
            const currentOffset = scrollX._value;
            const newOffset = direction === 'left' ? Math.max(0, currentOffset - scrollAmount) : currentOffset + scrollAmount;
            Animated.spring(scrollX, {
                toValue: newOffset,
                useNativeDriver: true
            }).start();
            scrollViewRef.current.scrollTo({ x: newOffset, animated: true });
        }
    };

    return (
        <View className="pl-4">
            <Text className="text-2xl font-bold ml-2">Istanbul - Fatih</Text>
            <Text className="text-sm text-gray-300 ml-2">Fatih dishes for you!</Text>

            <View className="relative">
                <TouchableOpacity
                    onPress={() => scrollTo('left')}
                    className="absolute top-1/3 left-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
                >
                    <Icon name="arrow-left" size={30} color="#4B0082" />
                </TouchableOpacity>

                <ScrollView
                    ref={scrollViewRef}
                    contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                >
                    {FeaturedLibraryFatih.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => handlePress(item.id)}
                            className="flex flex-col items-center ml-2"
                        >
                            <Image
                                className="w-56 h-56 rounded"
                                source={{ uri: item.ImgUrl }}
                            />
                            <View className="w-56 mt-2">
                                <Text className="font-bold text-xl">{item.Title}</Text>
                                <Text className="text-gray-600 text-sm overflow-hidden" numberOfLines={2}>
                                    {item.Description}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <TouchableOpacity
                    onPress={() => scrollTo('right')}
                    className="absolute top-1/3 right-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
                >
                    <Icon name="arrow-right" size={30} color="#4B0082" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
