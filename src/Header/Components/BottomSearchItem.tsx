import React from "react"

interface secondHeaderData {
  name: string
  classs?: string
}

const BottomSearchItem = ({ name, classs }: secondHeaderData) => {
  const style = `bottom-headerTag-container ${classs}`
  return (
    <div className={style}>
      <p className="bottom-header-tags">{name}</p>
    </div>
  )
}

export default BottomSearchItem
