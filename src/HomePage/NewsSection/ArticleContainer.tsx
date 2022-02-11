import React from "react"

const ArticleContainer = ({ data, change }: { data: any; change: any }) => {
  return (
    <div>
      <div
        onClick={() => change("page", data)}
        className="article-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.9)),url(${data.fields.thumbnail})`,
        }}
      >
        <p>{data.fields.headline}</p>
      </div>
    </div>
  )
}

export default ArticleContainer
