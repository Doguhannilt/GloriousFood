import { View, StyleSheet } from 'react-native';
import React from 'react';
import { ShoppingCartIcon } from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';

const OrderIconForHome = () => {
    const items = useSelector((state) => state.order.items);


    return (
        <View style={styles.container}>
            {items.length > 0 && <ShoppingCartIcon size={36} style={styles.icon} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    icon: {
        color: 'purple',
    },
});

export default OrderIconForHome;
