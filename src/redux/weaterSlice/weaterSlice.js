import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null,
        headers: {}, // Այստեղ պահեք միայն անհրաժեշտ header-ները
    },
    reducers: {
        SET_WEATHER(state, action) {
            state.data = action.payload.data;
            state.headers = action.payload.headers; // Պահեք միայն անհրաժեշտ տվյալները
        },
    },
});

export const loadWeatherSlice = (key, city) => async (dispatch) => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
        dispatch(SET_WEATHER({
            data: response.data,       // Վերցնում ենք միայն API-ից եկող տվյալները
            headers: {                // Վերցնում ենք միայն անհրաժեշտ header-ները
                contentType: response.headers['content-type'],
            },
        }));
    } catch {
        console.log("Error Weather Data");
    }
};

export const { SET_WEATHER } = weatherSlice.actions;
export default weatherSlice.reducer;