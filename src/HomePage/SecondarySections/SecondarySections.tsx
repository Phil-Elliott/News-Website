import React from "react"
import "./SecondarySections.scss"

const SecondarySections = ({ fakeData }: { fakeData: any }) => {
  return (
    <div className="secondary-container">
      <h1>Sports</h1>
      <div className="secondary-articles-container">
        <div className="article-container">
          <img src={fakeData.img} alt="" />
          <p>{fakeData.title}</p>
        </div>
        <div className="article-container">
          <img src={fakeData.img} alt="" />
          <p>{fakeData.title}</p>
        </div>
        <div className="article-container">
          <img src={fakeData.img} alt="" />
          <p>{fakeData.title}</p>
        </div>
      </div>
    </div>
  )
}

export default SecondarySections
