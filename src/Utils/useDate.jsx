

import { useEffect, useState } from "react";

export const useDate = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 60*1000)

        return () => {
            clearInterval(timer)
        }
    },[])

    
    const date = today.toLocaleDateString(locale, {weekday: 'long', year: 'numeric',month: 'long', day: 'numeric'})
    const time =  today.toLocaleTimeString("en", { hour: 'numeric', hour12: true, minute: 'numeric' })

    return {
        date, time
    }
}