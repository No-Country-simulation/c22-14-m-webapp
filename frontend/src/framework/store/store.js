import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import appointmentReducer from './appointment/appointmentSlice'

const store = configureStore({
    reducer: {
        user : userReducer,
        appointments: appointmentReducer,
    },
})

export { store } 