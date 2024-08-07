import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function CategoryCard({ imgUrl, title, id }) {
  const navigation = useNavigation();

  const handlePress = () => {
    // navigation.navigate('Detail', { id });

  };

  return (
    <TouchableOpacity
      className="mr-2 relative pb-2 mb-5"
      onPress={handlePress}
    >
      <Image
        source={{
          uri: imgUrl
        }}
        className="h-28 w-20 rounded"
      />
      <Text
        className="absolute bottom-2 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}