import React from "react"

const ArticleContainer = ({ data, change }: { data: any; change: any }) => {
  return (
    <div onClick={() => change("articles", data)} className="article-container">
      <img src={data.urlToImage} alt="" />
      <p>{data.title}</p>
    </div>
  )
}

export default ArticleContainer
