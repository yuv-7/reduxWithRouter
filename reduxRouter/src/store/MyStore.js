import {configureStore} from '@reduxjs/toolkit';
import UserSlice from '../reducers/UserSlice';

export const MyStore = configureStore({
    reducer:UserSlice
})