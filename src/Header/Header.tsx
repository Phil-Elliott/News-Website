import React from "react"
import "./Header.scss"
import TopSearchItem from "./Components/TopSearchItem"
import Search from "./Components/Search"
import { FaSortDown, FaSearch } from "react-icons/fa"

const Header = () => {
  interface headerData {
    name: string
    color: string
    hidden?: string
  }

  const headerArr: headerData[] = [
    { name: "Home", color: "h-black" },
    { name: "News", color: "h-red" },
    { name: "Sports", color: "h-orange", hidden: "hidden" },
    { name: "Worklife", color: "h-yellow", hidden: "hidden" },
    { name: "Travel", color: "h-green", hidden: "hidden" },
    { name: "Future", color: "h-blue", hidden: "hidden" },
    { name: "Culture", color: "h-purple", hidden: "hidden" },
  ]

  return (
    <header className="header">
      <div className="header-container">
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
        <div className="more-container">
          <p>More</p>
          <FaSortDown />
        </div>
        <div className="search-container">
          <Search />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </header>
  )
}

export default Header
