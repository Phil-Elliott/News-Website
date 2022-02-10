import React from "react"

interface secondHeaderData {
  name: string
  classs?: string
  change: any
}

const BottomSearchItem = ({ name, classs, change }: secondHeaderData) => {
  const style = `bottom-headerTag-container ${classs}`
  return (
    <div className={style} onClick={() => change("articles", name)}>
      <p className="bottom-header-tags">{name}</p>
    </div>
  )
}

export default BottomSearchItem
