/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react'

import icon from "../assets/icons/fog.png"
import {useDate} from '../Utils/useDate'


import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  iconString,
  conditions,
  visibility,
  sealevelpressure
}) => {



  const {time, date} = useDate();

  const [icon, setIcon] = useState("")

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])
  return (
    <div className='w-[35rem] min-w-[35rem] h-[400px] glassCard p-4'>
    <div className="px-2">
<h1 className='font-semibold text-white'>Current weather</h1>
<p className='text-white'>{date} <span>{time}</span></p>
    </div>
    <div className='flex w-full justify-between, items-center mt-12 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-4xl flex justify-between items-center' >{temperature} &deg;C</p>
        <div className='px-20 text-2xl font-bold'>
        {conditions}
      </div>
      </div>
      <div className='font-bold text-center text-xl'>
        {place}
      </div>
      <div className='w-full flex justify-between items-center mt-10'>
        <p className='text-center p-2 font-semibold '>Wind Speed <p className='font-normal'>
        {windspeed}
         gm/m&#179;</p></p>

        <p className='text-center p-2 font-bold '>Humidity <p className='font-normal'>
        {humidity}
         %</p></p>

         <p className='text-center p-2 font-bold'>Visibility <p className='font-normal'>
        {visibility}
         km</p></p>
        <p className='text-center p-2 font-bold '>Pressure <p className='font-normal'>
        {sealevelpressure}
         mb</p></p>

      </div>
    </div>
  )
}

export default WeatherCard
