import React from "react"
import { Link } from "react-router-dom"

interface headerData {
  name: string
  color: string
  hidden?: string
}

const TopSearchItem = ({ name, color, hidden }: headerData) => {
  const style = `tag-container ${color} ${hidden}`

  return (
    <div className={style}>
      <p className={hidden}>{name}</p>
    </div>
  )
}

export default TopSearchItem
