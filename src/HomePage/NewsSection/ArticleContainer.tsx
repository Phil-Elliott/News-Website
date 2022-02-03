import React from "react"

const ArticleContainer = ({ data, change }: { data: any; change: any }) => {
  return (
    <div>
      <div
        onClick={() => change("page", data)}
        className="article-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${data.urlToImage})`,
        }}
      >
        <p>{data.title}</p>
      </div>
    </div>
  )
}

export default ArticleContainer
