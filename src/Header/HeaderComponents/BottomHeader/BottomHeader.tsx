import React from "react"
import BottomSearchItem from "./BottomSearchItem"

// Data for the bottom header
interface secondHeaderData {
  name: string
  class?: string
}
const secondHeaderArr: secondHeaderData[] = [
  { name: "Sports", class: "bottom-expand" },
  { name: "Travel", class: "bottom-expand" },
  { name: "Future", class: "bottom-expand" },
  { name: "Culture", class: "bottom-expand" },
  { name: "Music" },
  { name: "TV" },
  { name: "Weather" },
  { name: "Worklife" },
]

const BottomHeader = ({ openBottom }: { openBottom: boolean }) => {
  return (
    <div
      className={
        openBottom ? "header-bottom" : "hidden-bottom-header header-bottom"
      }
    >
      <div className="header-bottom-container">
        <p className="bottom-header-more">More</p>
        {secondHeaderArr.map((entry, i) => {
          return (
            <BottomSearchItem
              key={i}
              name={secondHeaderArr[i].name}
              classs={secondHeaderArr[i].class}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BottomHeader
