import React, { useState } from "react"

const Search = ({ query, searchQuery }: { query: any; searchQuery: any }) => {
  const [text, setText] = useState("")

  const change = (e: any) => {
    setText(e)
    query(e)
  }

  const tryIt = () => {
    searchQuery()
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
              tryIt()
            }
          }}
        />
      </form>
    </section>
  )
}

export default Search
