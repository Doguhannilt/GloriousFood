import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const Search = ({ onSelect }) => {
    const [query, setQuery] = useState('');
    const options = [
        "Istanbul",
        "Istanbul-Kadikoy",
        "Istanbul-Buyukcekmece",
        "Istanbul-Fatih"
    ];

    const handleSelect = (option) => {
        setQuery(option);
        onSelect(option); // Call the function passed via props to handle scrolling
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <MagnifyingGlassIcon color={"purple"} size={25} />
                <TextInput
                    placeholder='Restaurant and cuisines'
                    keyboardType='default'
                    value={query}
                    onChangeText={setQuery}
                    style={styles.input}
                />
            </View>
            {query.length > 0 && (
                <View style={styles.list}>
                    {options.filter(option => option.toLowerCase().includes(query.toLowerCase())).map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleSelect(item)}
                            style={styles.option}
                        >
                            <Text style={styles.optionText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: 16,
        marginTop: 78,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EDE7F6', // Light purple
        padding: 10,
        borderRadius: 8,
        marginBottom: 8,
    },
    input: {
        flex: 1,
        marginLeft: 8,
        color: 'purple',
    },
    option: {
        backgroundColor: '#F3E5F5', // Lighter purple
        padding: 12,
        marginTop: 4,
        borderRadius: 8,
    },
    optionText: {
        color: '#6A1B9A', // Darker purple
    },
    list: {
        marginTop: 8,
    },
});

export default Search;
