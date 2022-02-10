import React, { useState } from "react"
import "./Header.scss"
import TopHeader from "./HeaderComponents/TopHeader/TopHeader"
import BottomHeader from "./HeaderComponents/BottomHeader/BottomHeader"

const Header = ({
  query,
  change,
  page,
}: {
  query: any
  change: any
  page: any
}) => {
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
        change={change}
        page={page}
      />
      <BottomHeader openBottom={openBottom} change={change} />
    </div>
  )
}

export default Header
