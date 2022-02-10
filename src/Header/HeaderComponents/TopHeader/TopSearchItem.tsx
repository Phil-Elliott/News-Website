import React from "react"

interface headerData {
  name: string
  color: string
  hidden?: string
  change: any
}

const TopSearchItem = ({ name, color, hidden, change }: headerData) => {
  const style = `tag-container ${color} ${hidden}`

  return (
    <div
      className={style}
      onClick={
        name === "home"
          ? () => change("home", name)
          : () => change("articles", name)
      }
    >
      <p className={hidden}>{name}</p>
    </div>
  )
}

export default TopSearchItem
