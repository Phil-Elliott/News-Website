import React from "react"
import BottomSearchItem from "./BottomSearchItem"

// Data for the bottom header
interface secondHeaderData {
  name: string
  class?: string
}
const secondHeaderArr: secondHeaderData[] = [
  { name: "sports", class: "bottom-expand" },
  { name: "travel", class: "bottom-expand" },
  { name: "future", class: "bottom-expand" },
  { name: "culture", class: "bottom-expand" },
  { name: "music" },
  { name: "TV" },
  { name: "weather" },
  { name: "worklife" },
]

const BottomHeader = ({
  openBottom,
  change,
}: {
  openBottom: boolean
  change: any
}) => {
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
              change={change}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BottomHeader
