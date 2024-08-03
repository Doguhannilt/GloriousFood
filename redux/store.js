import { configureStore } from '@reduxjs/toolkit';
import AllInformation from '../redux/slices/hotelInformation';
import orderReducer from '../redux/slices/OrderSlice';
import userReducer from '../redux/api/auth/authSlice';
import { apiSlice } from '../redux/api/apiSlice'; // Import your API slice
import cardReducer from '../redux/api/cards/cardsSlice'
export default configureStore({
  reducer: {
    informations: AllInformation,
    order: orderReducer,
    auth: userReducer,
    creditCard: cardReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // Add API slice reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(

    ).concat(apiSlice.middleware), // Add API slice middleware
});


