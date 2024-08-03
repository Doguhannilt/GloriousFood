import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CreditCardInput } from 'react-native-credit-card-input';
import { setCardInfo, clearCardInfo } from '../../redux/api/cards/cardsSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cards = () => {
    const dispatch = useDispatch();
    const cardInfo = useSelector((state) => state.creditCard.cardInfo);
    const [cardData, setCardData] = useState({});

    useEffect(() => {
        const loadCardInfo = async () => {
            try {
                const cardInfo = await AsyncStorage.getItem('creditCardInfo');
                if (cardInfo) {
                    dispatch(setCardInfo(JSON.parse(cardInfo)));
                }
            } catch (error) {
                console.error('Failed to load card info from AsyncStorage', error);
            }
        };

        loadCardInfo();
    }, [dispatch]);

    const handleCardChange = (formData) => {
        setCardData(formData);
    };

    const handleSave = () => {
        if (cardData.values) {
            dispatch(setCardInfo(cardData.values));
        }
    };

    const handleLogout = () => {
        dispatch(clearCardInfo());
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Credit Card Information</Text>
            <CreditCardInput
                onChange={handleCardChange}
                labelStyle={styles.label}
                inputStyle={styles.input}
                placeholderColor="black"
            />
            <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Clear All Cards</Text>
            </TouchableOpacity>
            {cardInfo && cardInfo.number ? (
                <View style={styles.cardInfo}>
                    <Text style={styles.cardInfoText}>Card Info:</Text>
                    <Text style={styles.cardInfoText}>Number: {cardInfo.number}</Text>
                    <Text style={styles.cardInfoText}>Expiry: {cardInfo.expiry}</Text>
                    <Text style={styles.cardInfoText}>CVC: {cardInfo.cvc}</Text>
                </View>
            ) : (
                <Text style={styles.cardInfoText}>No card information available.</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        color: 'black',
    },
    input: {
        color: 'black',
    },
    button: {
        backgroundColor: '#4B0082',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardInfo: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'white',
        borderWidth:1,
        borderColor:'#408439',
        borderRadius: 5,
    },
    cardInfoText: {
        fontSize: 16,
        color: '#000000',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10
    },
});

export default Cards;
