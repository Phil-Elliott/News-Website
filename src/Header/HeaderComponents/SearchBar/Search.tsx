import React, { useState } from "react"

const Search = () => {
  const [text, setText] = useState("")

  const change = (e: any) => {
    setText(e)
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
        />
      </form>
    </section>
  )
}

export default Search
