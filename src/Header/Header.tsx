import React, { useState } from "react"
import "./Header.scss"
import TopSearchItem from "./Components/TopSearchItem"
import BottomSearchItem from "./Components/BottomSearchItem"
import Search from "./Components/Search"
import { FaSortDown, FaSearch } from "react-icons/fa"

const Header = () => {
  const [openBottom, setOpenBottom] = useState(true)

  // Data for the top header
  interface headerData {
    name: string
    color: string
    hidden?: string
  }
  const headerArr: headerData[] = [
    { name: "Home", color: "h-blue" },
    { name: "News", color: "h-red" },
    { name: "Sports", color: "h-orange", hidden: "hidden" },
    { name: "Travel", color: "h-yellow", hidden: "hidden" },
    { name: "Future", color: "h-green", hidden: "hidden" },
    { name: "Culture", color: "h-purple", hidden: "hidden" },
  ]

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

  // Opens and closes the bottom header
  const changeHeader = () => {
    openBottom ? setOpenBottom(false) : setOpenBottom(true)
  }

  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="header-top">
            <div className="logo">
              <div className="space-right">
                <p>N</p>
              </div>
              <div className="space-right">
                <p>E</p>
              </div>
              <div className="space-right">
                <p>W</p>
              </div>
              <div>
                <p>S</p>
              </div>
            </div>
            {headerArr.map((entry, i) => {
              return (
                <TopSearchItem
                  key={i}
                  name={headerArr[i].name}
                  color={headerArr[i].color}
                  hidden={headerArr[i].hidden}
                />
              )
            })}
            <div onClick={changeHeader} className="more-container">
              <p>More</p>
              <FaSortDown />
            </div>
            <div className="search-container">
              <Search />
              <FaSearch className="search-icon" />
            </div>
          </div>
        </div>
      </header>
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
    </div>
  )
}

export default Header

/*
    1) Have button hide 2nd header 
    2) Make it responsive (have other tags move there)
    3) Have top colors change when button is pushed



*/
