import React from "react"

const ArticleContainer = ({
  data,
  change,
  titleName,
}: {
  data: any
  change: any
  titleName: string
}) => {
  return (
    <div onClick={() => change("page", data)} className="article-container">
      {titleName !== "news" ? (
        <div>
          <img src={data.fields.thumbnail} alt="" />
          <p>{data.fields.headline}</p>
        </div>
      ) : (
        <div>
          <img src={data.urlToImage} alt="" />
          <p>{data.title}</p>
        </div>
      )}
    </div>
  )
}

export default ArticleContainer

// ? data.title : data.fields.headline
// ? data.urlToImage : data.fields.thumbnail
