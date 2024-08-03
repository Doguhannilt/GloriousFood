import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    userInfo: null,
    orderInfo: null
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            AsyncStorage.setItem("userInfo", JSON.stringify(action.payload));
            const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
            AsyncStorage.setItem('expirationTime', expirationTime.toString());
        },
        logout: (state) => {
            state.userInfo = null;
            AsyncStorage.clear();
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },

    }
});

export const { setCredentials, logout, setUserInfo } = authSlice.actions;
export default authSlice.reducer;


export const fetchUserInfoFromStorage = () => async (dispatch) => {
    try {
        const userInfoString = await AsyncStorage.getItem('userInfo');
        if (userInfoString) {
            const userInfo = JSON.parse(userInfoString);
            dispatch(setUserInfo(userInfo));
        } else {
            dispatch(setUserInfo(null));
        }
    } catch (error) {
        console.error("Failed to load userInfo from AsyncStorage:", error);
        dispatch(setUserInfo(null));
    }
};

