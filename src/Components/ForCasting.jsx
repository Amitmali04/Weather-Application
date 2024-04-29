
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

const ForCasting = ({time, temp, iconString}) => {
  
  const date = new Date(time);
  const [icon, setIcon] = useState('')

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
    <div className='glassCard w-[20rem] h-[8rem] p-4 flex flex-col'>
      <p className='text-center font-semibold'>
      {date.toLocaleDateString('en', { weekday: 'short' })}, {date.toLocaleDateString('en', { month: 'short' })} {date.getDate()}
      </p>
     
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={icon} alt="forecast not available" className='w-[3rem] h-[3rem]' />
      <p className='text-center font-bold'>{temp}&deg;C</p>
      </div>
    </div>
  )
}

export default ForCasting
