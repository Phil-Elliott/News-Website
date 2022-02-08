import React from "react"

const PageNav = ({
  number,
  changePage,
  pageNumber,
}: {
  number: number
  changePage: any
  pageNumber: any
}) => {
  return (
    <div>
      <p
        className={pageNumber === number ? "active" : "number"}
        onClick={() => changePage(number)}
      >
        {number}
      </p>
    </div>
  )
}

export default PageNav
