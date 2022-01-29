import React from "react"
import "./NewsSection.scss"

const NewsSection = ({ fakeData }: { fakeData: any }) => {
  return (
    <div className="news-container">
      <div className="news-header-container">
        <h1>News</h1>
        <h2>Saturday, 29 January</h2>
      </div>
      <div className="articles-container ">
        <div
          className="article-container grid-row-span-2"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${fakeData.img})`,
          }}
        >
          <p>{fakeData.title}</p>
        </div>
        <div
          className="article-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${fakeData.img})`,
          }}
        >
          <p>{fakeData.title}</p>
        </div>
        <div
          className="article-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${fakeData.img})`,
          }}
        >
          <p>{fakeData.title}</p>
        </div>
        <div
          className="article-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${fakeData.img})`,
          }}
        >
          <p>{fakeData.title}</p>
        </div>
        <div
          className="article-container"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${fakeData.img})`,
          }}
        >
          <p>{fakeData.title}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsSection
