/* eslint-disable react/prop-types */

import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Delhi, DL, India')
    const [thisLocation, setLocation] = useState({
            address:"Delhi, DL, India",
            latitude: 28.6341,
            longitude: 77.2169,
            currentConditions:{}
            })

            console.log(thisLocation)

    // fetch api
    const fetchWeather = async () => {
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }
        

        try {
            const response = await axios.request(options);
            // console.log(response.data)
            const thisData = Object.values(response.data.locations)[0]
            setLocation(thisData)
            setValues(thisData.values)
            setWeather(thisData.values[0])
        } catch (e) {
            console.error(e);
            // if the api throws error.
            alert('This place does not exist')
        }
    }

const onClick = () =>{
    fetchWeather();
}

    useEffect(() => {
        fetchWeather()
    }, [place])


    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place,
            onClick
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)