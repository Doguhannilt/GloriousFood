import { configureStore } from '@reduxjs/toolkit'
import AllInformation from '../redux/slices/hotelInformation'
import orderReducer from '../redux/slices/OrderSlice'

export default configureStore({
  reducer: {
    informations: AllInformation,
    order: orderReducer

  },
})