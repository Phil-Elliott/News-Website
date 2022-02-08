import React, { useState } from "react"
import "./Header.scss"
import TopHeader from "./HeaderComponents/TopHeader/TopHeader"
import BottomHeader from "./HeaderComponents/BottomHeader/BottomHeader"

const Header = ({ query, searchQuery }: { query: any; searchQuery: any }) => {
  const [openBottom, setOpenBottom] = useState(true)

  // Opens and closes the bottom header
  const changeHeader = () => {
    openBottom ? setOpenBottom(false) : setOpenBottom(true)
  }

  return (
    <div>
      <TopHeader
        changeHeader={changeHeader}
        query={query}
        searchQuery={searchQuery}
      />
      <BottomHeader openBottom={openBottom} />
    </div>
  )
}

export default Header
