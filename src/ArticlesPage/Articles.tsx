import React from "react"
import "./Articles.scss"
import ArticleContainer from "./ArticleContainer"
import Header from "./../SharedComponents/Header/Header"

const Articles = ({ data }: { data: any }) => {
  return (
    <div className="articles-page">
      <Header name="News" />
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

// connect other news apis
// connect them to react router dom or use ternarys at first
// need to pass the specific array based off of a click
// connect the search bar and create a search bar page
// Create the page for each article
// Have each article clickable and relay the data to a specific page
// Create Footer
// Create weather component
// If picture doesnt have img then have generic image
