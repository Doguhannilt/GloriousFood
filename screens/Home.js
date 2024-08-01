import React, { useLayoutEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserIcon } from "react-native-heroicons/outline";
import Search from './HomeComponents/Search';
import Categories from './Categories/Categories';
import FeaturedRows from './Feature/FeaturedRows';
import OrderIconForHome from './Order/OrderIconForHome';

export default function Home() {
    const navigation = useNavigation();
    const scrollViewRef = useRef(null);

    const handleScrollTo = (section) => {
        if (scrollViewRef.current) {
            let offsetY = 0;
            switch (section) {
                case "Istanbul":
                    offsetY = 300;
                    break;
                case "Istanbul-Kadikoy":
                    offsetY = 800;
                    break;
                case "Istanbul-Buyukcekmece":
                    offsetY = 1200;
                    break;
                case "Istanbul-Fatih":
                    offsetY = 1500;
                    break;
                default:
                    break;
            }
            scrollViewRef.current.scrollTo({ y: offsetY, animated: true });
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const orderHandlePress = () => {
        navigation.navigate('Orders');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                <View style={styles.header}>

                    {/* ORDER ICON AND THE ORDER PAGE */}
                    <TouchableOpacity onPress={orderHandlePress}>
                        <OrderIconForHome />
                    </TouchableOpacity>

                    {/* HEADER */}
                    <Image
                        source={{ uri: "https://links.papareact.com/wru" }}
                        style={styles.logo}
                    />
                    <View style={styles.headerText}>
                        <Text style={styles.deliverNowText}>Deliver Now!</Text>
                        <Text style={styles.currentLocationText}>
                            Current Location
                        </Text>
                    </View>
                    <View style={styles.userIconContainer}>
                        <UserIcon size={35} color="#800080" />
                    </View>
                </View>

                {/* SEARCH BAR */}
                <Search onSelect={handleScrollTo} />

                {/* CATEGORIES */}
                <Categories />

                {/* FEATURES */}
                <FeaturedRows />

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    scrollContainer: {
        paddingBottom: 100,
        paddingTop: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 0,
        marginTop: 20,

    },
    logo: {
        height: 40,
        width: 40,
        backgroundColor: '#D1D5DB', // Gray color
        borderRadius: 20,
    },
    headerText: {
        flex: 1,
        marginLeft: 10,
    },
    deliverNowText: {
        fontSize: 12,
        color: '#9CA3AF', // Gray color
    },
    currentLocationText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    userIconContainer: {
        marginLeft: 10,
    },
});
