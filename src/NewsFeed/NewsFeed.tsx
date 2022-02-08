import React from "react"
import "./NewsFeed.scss"
import Article from "./Article"
import PageNav from "./PageNav"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const NewsFeed = ({
  searchResults,
  page,
  pageNumber,
}: {
  searchResults: any
  page: any
  pageNumber: any
}) => {
  const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const changePage = (e: number) => {
    page(e)
  }

  const changePageArrows = (direction: string) => {
    if (direction === "left" && pageNumber > 1) {
      page(pageNumber - 1)
    } else if (direction === "right" && pageNumber < 10) {
      page(pageNumber + 1)
    }
  }

  return (
    <div className="articles-container">
      {searchResults.map((entry: any, i: number) => {
        return <Article key={i} data={searchResults[i]} />
      })}
      <div
        className="page-nav"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div className="number" onClick={() => changePageArrows("left")}>
          <FaChevronLeft className="icon" />
        </div>
        {numbersArr.map((entry: any, i: number) => {
          return (
            <PageNav
              key={i}
              number={numbersArr[i]}
              changePage={changePage}
              pageNumber={pageNumber}
            />
          )
        })}
        <div className="number" onClick={() => changePageArrows("right")}>
          <FaChevronRight className="icon" />
        </div>
      </div>
    </div>
  )
}

export default NewsFeed
