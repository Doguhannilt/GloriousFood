import { ScrollView } from 'react-native'
import React from 'react'

// REDUX
import { useSelector } from 'react-redux';
import Header from './Components/Header';
import OrderMenu from './Components/OrderMenu';
import InformationMenu from './Components/InformationMenu';



const DetailPage = () => {

  const restaurant = useSelector((state) => state.informations.restaurant);

  return (
    <ScrollView className="pb-50">
      <Header restaurant={restaurant} />
      <OrderMenu restaurant={restaurant } />
      <InformationMenu restaurant={restaurant} />
    </ScrollView>
  );
}

export default DetailPage