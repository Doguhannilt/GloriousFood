import { configureStore } from '@reduxjs/toolkit'
import AllInformation from '../redux/slices/hotelInformation'

export default configureStore({
  reducer: {
    informations: AllInformation

  },
})