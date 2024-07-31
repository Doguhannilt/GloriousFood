import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon
} from "react-native-heroicons/outline"


export default function Search() {
    return (
        <View className="flex-row items-center">
            <View className="flex-row rounded-md bg-gray-300 mt-4 mx-4 p-2 items-center">
                <MagnifyingGlassIcon color={"gray"} size={25} />
                <TextInput
                    placeholder='Restaurant and cuisines'
                    keyboardType='default'
                    className="flex-1 ml-2" 
                />
            </View>
        </View>
    );
}