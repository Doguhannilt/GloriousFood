import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    cardInfo: null,
};

const creditCardSlice = createSlice({
    name: 'creditCard',
    initialState,
    reducers: {
        setCardInfo: (state, action) => {
            state.cardInfo = action.payload;
            // Save to AsyncStorage
            AsyncStorage.setItem('creditCardInfo', JSON.stringify(action.payload));
        },
        clearCardInfo: (state) => {
            state.cardInfo = null;
            // Remove from AsyncStorage
            AsyncStorage.removeItem('creditCardInfo');
        },
    },
});

export const { setCardInfo, clearCardInfo } = creditCardSlice.actions;
export default creditCardSlice.reducer;
