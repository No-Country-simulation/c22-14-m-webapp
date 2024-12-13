import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_APPOINTMENT } from '../../../settings';

export const fetchUserAppointments = createAsyncThunk(
    'appointments/fetchUserAppointments',
    async (userId, thunkAPI) => {
        const response = await axios.get(`${GET_APPOINTMENT}/${userId}`);
        return response.data;
    }
);

const appointmentSlice = createSlice({
    name: 'appointments',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserAppointments.fulfilled, (state, action) => {
                return action.payload; // Actualizar el estado con las citas del usuario
            })
            .addCase(fetchUserAppointments.rejected, (state, action) => {
                console.error(action.error);
            });
    }
});

export default appointmentSlice.reducer;
