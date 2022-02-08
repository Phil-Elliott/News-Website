import React from "react"

const Article = ({ data }: { data: any }) => {
  return (
    <div>
      <div className="article">
        <img src={data.fields.thumbnail} alt="" />
        <div className="search-content-right">
          <h1>{data.fields.headline}</h1>
          <p>{data.fields.trailText}</p>
        </div>
      </div>
    </div>
  )
}

export default Article
