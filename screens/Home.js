import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  UserIcon,
  ChevronDownIcon,

} from "react-native-heroicons/outline"
import { ScrollView } from 'react-native'

// PAGES AND COMPONENTS
import Search from './HomeComponents/Search'
import Categories from './Categories/Categories'
import FeaturedRows from './Feature/FeaturedRows'



export default function Home() {

  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className="bg-white pt-5 pb-40">
      <View className="pt-10 pl-4 flex-row items-center">
        <Image
          source={{
            uri: "https://links.papareact.com/wru"
          }}
          className="h-10 w-10 bg-gray-300 rounded-full"
        />
        <View className="flex-1 ml-4">
          <Text className='text-sm text-gray-300'>Deliver Now!</Text>
          <Text className='text-xl font-bold flex-row items-center'>
            Current Location
            <ChevronDownIcon size={20} color="#800080" />
          </Text>
        </View>
        <UserIcon size={35} color="#800080" />
      </View>
      {/* SEARCH BAR */}
      <Search />
      {/* CATEGORIES */}
      <Categories />
      {/* FEATURES */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <FeaturedRows />
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 100,
    paddingTop: 10,
    flexGrow: 1,
  }
});