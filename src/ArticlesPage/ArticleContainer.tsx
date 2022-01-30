import React from "react"

const ArticleContainer = ({
  image,
  title,
}: {
  image: string
  title: string
}) => {
  return (
    <div className="article-container">
      <img src={image} alt="" />
      <p>{title}</p>
    </div>
  )
}

export default ArticleContainer
