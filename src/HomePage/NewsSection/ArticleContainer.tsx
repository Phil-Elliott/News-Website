import React from "react"

const ArticleContainer = ({
  image,
  title,
}: {
  image: string
  title: string
}) => {
  return (
    <div>
      <div
        className="article-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${image})`,
        }}
      >
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ArticleContainer
