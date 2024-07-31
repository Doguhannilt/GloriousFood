import { View, Text, Image } from 'react-native'
import React from 'react'

const Header = ({ restaurant }) => {
    return (
        <View className="relative">
            <Image
                className="w-full h-80 object-cover rounded "
                source={{ uri: restaurant.ImgUrl }}
            />
            <View className="absolute self-center mt-32 flex justify-center items-center  bg-opacity-50">
                <Text className="text-white text-5xl shadow-2xl shadow-purple-900 font-bold text-center">{restaurant.Title}</Text>
                <Text className="text-white text-2xl shadow-2xl shadow-purple-900 font-bold text-center">Welcome!</Text>
            </View>
        </View>
    )
}

export default Header