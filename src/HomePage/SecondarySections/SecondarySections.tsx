import React from "react"
import "./SecondarySections.scss"

const SecondarySections = ({
  data,
  name,
  change,
}: {
  data: any
  name: string
  change: any
}) => {
  return (
    <div
      className="secondary-container"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <h1 onClick={() => change("articles", name)}>{name}</h1>
      <div className="secondary-articles-container">
        <div
          onClick={() => change("page", data[0])}
          className="article-container"
        >
          <img src={data[0].fields.thumbnail} alt="" />
          <p>{data[0].fields.headline}</p>
        </div>
        <div
          onClick={() => change("page", data[1])}
          className="article-container"
        >
          <img src={data[1].fields.thumbnail} alt="" />
          <p>{data[1].fields.headline}</p>
        </div>
        <div
          onClick={() => change("page", data[2])}
          className="article-container"
        >
          <img src={data[2].fields.thumbnail} alt="" />
          <p>{data[2].fields.headline}</p>
        </div>
      </div>
    </div>
  )
}

export default SecondarySections
