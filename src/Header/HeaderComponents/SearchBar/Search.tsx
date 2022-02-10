import React, { useState } from "react"

const Search = ({ query, page }: { query: any; page: any }) => {
  const [text, setText] = useState("")

  const change = (e: any) => {
    setText(e)
    query(e)
  }

  const searchIt = () => {
    page(1)
  }

  return (
    <section className="search hidden">
      <form>
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          value={text}
          onChange={(e) => change(e.target.value)}
          autoFocus
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault()
              searchIt()
              setText("")
            }
          }}
        />
      </form>
    </section>
  )
}

export default Search
