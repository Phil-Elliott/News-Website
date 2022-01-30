import React from "react"
import "./Content.scss"

const Content = ({ fakeData }: { fakeData: any }) => {
  return (
    <div className="content">
      <div className="left-content">
        <h1>{fakeData.title}</h1>
        <h2>{fakeData.author}</h2>
        <h3>{fakeData.source}</h3>
        <img src={fakeData.img} alt="" />
        <p>{fakeData.content}</p>
      </div>
      <div className="right-content">
        <p>Top Stories</p>
        <div className="top-article">
          <img src={fakeData.img} alt="" />
          <p>{fakeData.title}</p>
        </div>
        <div className="top-article">
          <img src={fakeData.img} alt="" />
          <p>{fakeData.title}</p>
        </div>
        <div className="top-article">
          <img src={fakeData.img} alt="" />
          <p>{fakeData.title}</p>
        </div>
        <div className="top-article">
          <img src={fakeData.img} alt="" />
          <p>{fakeData.title}</p>
        </div>
        <div className="top-article">
          <img src={fakeData.img} alt="" />
          <p>{fakeData.title}</p>
        </div>
      </div>
    </div>
  )
}

export default Content
