import React from "react"
import "./SecondarySections.scss"

const SecondarySections = ({ data }: { data: any }) => {
  return (
    <div className="secondary-container">
      <h1>Sports</h1>
      <div className="secondary-articles-container">
        <div className="article-container">
          <img src={data[0].urlToImage} alt="" />
          <p>{data[0].title}</p>
        </div>
        <div className="article-container">
          <img src={data[1].urlToImage} alt="" />
          <p>{data[1].title}</p>
        </div>
        <div className="article-container">
          <img src={data[2].urlToImage} alt="" />
          <p>{data[2].title}</p>
        </div>
      </div>
    </div>
  )
}

export default SecondarySections
