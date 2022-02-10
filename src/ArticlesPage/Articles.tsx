import React from "react"
import "./Articles.scss"
import ArticleContainer from "./ArticleContainer"
import Header from "./../SharedComponents/Header/Header"

const Articles = ({
  data,
  change,
  titleName,
}: {
  data: any
  change: any
  titleName: string
}) => {
  return (
    <div className="articles-page">
      <Header name={titleName} />
      <div
        className="articles-page-container"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {titleName === "news" ? (
          <div
            className=" main-article-container"
            onClick={() => change("page", data[0])}
          >
            <img src={data[0].urlToImage} alt="" />
            <p>{data[0].title}</p>
          </div>
        ) : (
          <div
            className=" main-article-container"
            onClick={() => change("page", data[0])}
          >
            <img src={data[0].fields.thumbnail} alt="" />
            <p>{data[0].fields.headline}</p>
          </div>
        )}

        {data.map((entry: any, i: number) => {
          if (i > 0) {
            return (
              <ArticleContainer
                key={i}
                data={entry}
                change={change}
                titleName={titleName}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default Articles
