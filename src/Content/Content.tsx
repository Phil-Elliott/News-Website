import React from "react"
import "./Content.scss"

const Content = ({
  fakeData,
  data,
  change,
}: {
  fakeData: any
  data: any
  change: any
}) => {
  return (
    <div className="content">
      <div className="left-content">
        <h1>{fakeData.title}</h1>
        <h2>{fakeData.author}</h2>
        <h3>{fakeData.source.name}</h3>
        <img src={fakeData.urlToImage} alt="" />
        <p>{fakeData.content}</p>
      </div>
      <div className="right-content">
        <p>Top Stories</p>
        <div onClick={() => change("page", data[0])} className="top-article">
          <img src={data[0].urlToImage} alt="" />
          <p>{data[0].title}</p>
        </div>
        <div onClick={() => change("page", data[1])} className="top-article">
          <img src={data[1].urlToImage} alt="" />
          <p>{data[1].title}</p>
        </div>
        <div onClick={() => change("page", data[2])} className="top-article">
          <img src={data[2].urlToImage} alt="" />
          <p>{data[2].title}</p>
        </div>
        <div onClick={() => change("page", data[3])} className="top-article">
          <img src={data[3].urlToImage} alt="" />
          <p>{data[3].title}</p>
        </div>
        <div onClick={() => change("page", data[4])} className="top-article">
          <img src={data[4].urlToImage} alt="" />
          <p>{data[4].title}</p>
        </div>
      </div>
    </div>
  )
}

export default Content
