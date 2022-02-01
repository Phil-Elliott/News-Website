import React, { useState, useEffect } from "react"
import "./Weather.scss"
import WeatherData from "./WeatherData"

const Weather = () => {
  const [lat, setLat] = useState<number>()
  const [long, setLong] = useState<number>()
  const [data, setData] = useState<any>()
  const [data2, setData2] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude)
        setLong(position.coords.longitude)
      })

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=61a24258f264e81b56f6f55f67f15a40`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result)
          // console.log(result)
        })
      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=alerts&appid=61a24258f264e81b56f6f55f67f15a40`
      )
        .then((res) => res.json())
        .then((result) => {
          setData2(result.daily)
          console.log(result)
        })
    }
    fetchData()
  }, [lat, long])

  return <div>{data && data2 && <WeatherData data={data} data2={data2} />}</div>
}

export default Weather
