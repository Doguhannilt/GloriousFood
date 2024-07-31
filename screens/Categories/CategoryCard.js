import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function CategoryCard({ imgUrl, title, id }) {
  const navigation = useNavigation();

  const handlePress = () => {
    // navigation.navigate('Detail', { id });
    console.log(id)
  };

  return (
    <TouchableOpacity
      className="mr-2 relative pb-2"
      onPress={handlePress}
    >
      <Image
        source={{
          uri: imgUrl
        }}
        className="h-28 w-20 rounded"
      />
      <Text
        className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}