import React from "react"
import "./Header.scss"

const Header = ({ name }: { name: string }) => {
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
      <h1>{name}</h1>
      <h2>{`${day}, ${dayNumber} ${month}`}</h2>
    </div>
  )
}

export default Header
