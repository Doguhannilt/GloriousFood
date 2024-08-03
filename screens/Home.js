import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';



// Icons
import { UserIcon } from "react-native-heroicons/outline";


// PAGES
import Search from './HomeComponents/Search';
import Categories from './Categories/Categories';
import FeaturedRows from './Feature/FeaturedRows';
import OrderIconForHome from './Order/OrderIconForHome';

// Image
import unknownImage from '../library/Image/unknown.png'
import Header from '../library/Image/logo.png'

// Redux
import { useDispatch, useSelector } from 'react-redux';

import { fetchUserInfo, fetchUserInfoFromStorage } from '../redux/api/auth/authSlice';



export default function Home() {

    const navigation = useNavigation();
    const scrollViewRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserInfoFromStorage());
    }, [dispatch]);


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

    const authHandlePress = () => {
        navigation.navigate('Auth')
    }

    const profileHandlePress = () => {
        navigation.navigate('Profile')
    }

    const userInfo = useSelector(state => state.auth.userInfo);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                <View style={styles.header}>

                    {/* ORDER ICON AND THE ORDER PAGE */}
                    {userInfo
                        ?
                        <TouchableOpacity onPress={orderHandlePress}>
                            <OrderIconForHome />
                        </TouchableOpacity>
                        :
                        null}
                    {/* HEADER */}
                    <Image
                        source={Header}
                        style={styles.logo}
                    />
                    <View style={styles.headerText}>

                        <Text style={styles.deliverNowText}>Glorious Food</Text>
                        <Text style={styles.currentLocationText}>
                            Current Location
                        </Text>
                    </View>

                    {userInfo
                        ?
                        <TouchableOpacity onPress={profileHandlePress}>
                            <Image
                                className="h-10 w-10 rounded-full "
                                source={unknownImage}
                            />
                        </TouchableOpacity>

                        :
                        <View style={styles.userIconContainer}>
                            <TouchableOpacity onPress={authHandlePress}>
                                <UserIcon size={35} color="#800080" />
                            </TouchableOpacity>
                        </View>
                    }

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
        paddingLeft: 10,
        marginTop: 20,

    },
    logo: {
        height: 40,
        width: 40,
        // Gray color
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
