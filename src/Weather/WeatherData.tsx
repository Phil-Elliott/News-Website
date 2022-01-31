import React from "react"

const WeatherData = ({ data, data2 }: { data: any; data2: any }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const d = new Date()
  let day = days[d.getDay()]
  let day2 = days[d.getDay() + 1]
  let day3 = days[d.getDay() + 2]
  let day4 = days[d.getDay() + 3]

  let img = `https://openweathermap.org/img/wn/${data2[0].weather[0].icon}@2x.png`
  let img2 = `https://openweathermap.org/img/wn/${data2[1].weather[0].icon}@2x.png`
  let img3 = `https://openweathermap.org/img/wn/${data2[2].weather[0].icon}@2x.png`
  let img4 = `https://openweathermap.org/img/wn/${data2[3].weather[0].icon}@2x.png`

  return (
    <div className="weather">
      <h1>{data.name} WEATHER</h1>
      <div className="main-weather-container">
        <div className="weather-container">
          <div className="weather-left">
            <img src={img} alt="icon" />
          </div>
          <div className="weather-right">
            <p className="weather-data-top">{day}</p>
            <p className="weather-data-middle">
              {((data2[0].temp.max - 273.15) * (9 / 5) + 32).toFixed(0)}°F
            </p>
            <p className="weather-data-bottom">
              {((data2[0].temp.min - 273.15) * (9 / 5) + 32).toFixed(0)}°F
            </p>
          </div>
        </div>
        <div className="weather-container">
          <div className="weather-left">
            <img src={img2} alt="icon" />
          </div>
          <div className="weather-right">
            <p className="weather-data-top">{day2}</p>
            <p className="weather-data-middle">
              {((data2[1].temp.max - 273.15) * (9 / 5) + 32).toFixed(0)}°F
            </p>
            <p className="weather-data-bottom">
              {((data2[1].temp.min - 273.15) * (9 / 5) + 32).toFixed(0)}°F
            </p>
          </div>
        </div>
        <div className="weather-container">
          <div className="weather-left">
            <img src={img3} alt="icon" />
          </div>
          <div className="weather-right">
            <p className="weather-data-top">{day3}</p>
            <p className="weather-data-middle">
              {((data2[2].temp.max - 273.15) * (9 / 5) + 32).toFixed(0)}°F
            </p>
            <p className="weather-data-bottom">
              {((data2[2].temp.min - 273.15) * (9 / 5) + 32).toFixed(0)}°F
            </p>
          </div>
        </div>
        <div className="weather-container">
          <div className="weather-left">
            <img src={img4} alt="icon" />
          </div>
          <div className="weather-right">
            <p className="weather-data-top">{day4}</p>
            <p className="weather-data-middle">
              {((data2[3].temp.max - 273.15) * (9 / 5) + 32).toFixed(0)}°F
            </p>
            <p className="weather-data-bottom">
              {((data2[3].temp.min - 273.15) * (9 / 5) + 32).toFixed(0)}°F
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherData

/*----------------------------------------------------------------

Header
- {location} weather 
flex
(left)
1) Icon
(right)
2) Day
3) High
4) Low

*/
