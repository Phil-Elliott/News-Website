import React from "react"
import TopSearchItem from "./TopSearchItem"
import Search from "./../SearchBar/Search"
import { FaSortDown, FaSearch } from "react-icons/fa"

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

const TopHeader = ({
  changeHeader,
  query,
  searchQuery,
}: {
  changeHeader: any
  query: any
  searchQuery: any
}) => {
  return (
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
            <Search query={query} searchQuery={searchQuery} />
            <FaSearch className="search-icon" onClick={searchQuery} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopHeader
