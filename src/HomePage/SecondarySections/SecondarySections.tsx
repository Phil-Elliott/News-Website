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
    <div className="secondary-container">
      <h1 onClick={() => change("articles", data)}>{name}</h1>
      <div className="secondary-articles-container">
        <div
          onClick={() => change("page", data[0])}
          className="article-container"
        >
          <img src={data[0].urlToImage} alt="" />
          <p>{data[0].title}</p>
        </div>
        <div
          onClick={() => change("page", data[1])}
          className="article-container"
        >
          <img src={data[1].urlToImage} alt="" />
          <p>{data[1].title}</p>
        </div>
        <div
          onClick={() => change("page", data[2])}
          className="article-container"
        >
          <img src={data[2].urlToImage} alt="" />
          <p>{data[2].title}</p>
        </div>
      </div>
    </div>
  )
}

export default SecondarySections
