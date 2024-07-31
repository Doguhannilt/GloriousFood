import { View } from 'react-native'
import React from 'react'
import Featured from './Sections/Featured'


// PAGES
import IstanbulFeatured from './Sections/Istanbul'
import IstanbulKadikoyFeatured from './Sections/Kadikoy'
import IstanbulBuyukcekmeceFeatured from './Sections/Buyukcekmece'
import IstanbulFatihFeatured from './Sections/Fatih'



const FeaturedRows = () => {
  return (
    <View>
      <Featured />
      <IstanbulFeatured />
      <IstanbulKadikoyFeatured />
      <IstanbulBuyukcekmeceFeatured />
      <IstanbulFatihFeatured/>
    </View>
  )
}

export default FeaturedRows