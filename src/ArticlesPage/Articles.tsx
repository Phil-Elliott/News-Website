import React from "react"
import "./Articles.scss"
import ArticleContainer from "./ArticleContainer"

const Articles = ({ data }: { data: any }) => {
  return (
    <div className="articles-page">
      <div className="articles-page-container">
        <div className="article-container main-article-container">
          <img src={data[0].urlToImage} alt="" />
          <p>{data[0].title}</p>
        </div>
        {data.map((entry: any, i: number) => {
          if (i > 0) {
            return (
              <ArticleContainer
                key={i}
                image={data[i].urlToImage}
                title={data[i].title}
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default Articles
