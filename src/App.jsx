import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadWeatherSlice } from "./redux/weaterSlice/weaterSlice";

export default function Weather() {
    const [data, setData] = useState({});
    const weatherData = useSelector(state => console.log(state?.weather?.data)
    );

    const dispatch = useDispatch()

    useEffect(() => {
        if (weatherData) {
            setData(weatherData);
        }
    }, [weatherData]);

    useEffect(() => {
        dispatch(loadWeatherSlice("cb36d56d59a6202351fe6cff27d8977a", "yerevan"));
    }, [dispatch]);

    console.log(data, "data");

    return (
        <div>
            <h1>Hello, Weather!</h1>
            {data && (
                <div>
                    <p>Temperature: {(data?.main?.temp - 273.15).toFixed(1)} °C</p>
                    <p>City: {data?.name}</p>
                </div>
            )}
        </div>
    )
}