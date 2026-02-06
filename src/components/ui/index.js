import { configureStore, Tuple } from '@reduxjs/toolkit'
import auth from '../slice/auth'

export default configureStore({
  reducer: {
    AuthReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
})