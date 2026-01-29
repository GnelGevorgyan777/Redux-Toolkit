import { combineReducers } from '@reduxjs/toolkit';
import weatherSlice from './weaterSlice/weaterSlice';

export const rootReducer = combineReducers({
    weather: weatherSlice,
});