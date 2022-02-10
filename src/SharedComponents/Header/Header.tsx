import React from "react"
import { transform } from "typescript"
import "./Header.scss"

const Header = ({ name, change }: { name: string; change?: any }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const d = new Date()
  let day = days[d.getDay()]
  let dayNumber = d.getDate()
  let month = months[d.getMonth()]

  return (
    <div className="news-header-container">
      <h1 onClick={() => change("articles", "news")}>{name}</h1>
      <h2>{`${day}, ${dayNumber} ${month}`}</h2>
    </div>
  )
}

export default Header
