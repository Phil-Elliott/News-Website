import React from "react"

const Article = ({ data, change }: { data: any; change: any }) => {
  return (
    <div>
      <div className="article" onClick={() => change("page", data)}>
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
