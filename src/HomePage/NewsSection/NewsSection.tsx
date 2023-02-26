import React from "react";
import "./NewsSection.scss";
import ArticleContainer from "./ArticleContainer";
import Header from "./../../SharedComponents/Header/Header";

const NewsSection = ({ data, change }: { data: any; change: any }) => {
  return (
    <div className="news-container">
      <Header name="News" change={change} />
      <div className="articles-container ">
        <div
          onClick={() => change("page", data[0])}
          className="article-container grid-row-span-2"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.9)),url(${data[0].fields.thumbnail})`,
          }}
        >
          <p>{data[0].fields.headline}</p>
        </div>
        {data.map((entry: any, i: number) => {
          if (i > 0 && i < 5) {
            return <ArticleContainer key={i} data={entry} change={change} />;
          } else {
            return;
          }
        })}
      </div>
    </div>
  );
};

export default NewsSection;

//

// Can use for content container
// {
//   data.map((entry, i) => {
//     return (
//       <ArticleContainer
//         key={i}
//         image={data[i].urlToImage}
//         title={data[i].title}
//       />
//     )
//   })
// }

//  {/*  */}

//         {/* <div
//           className="article-container"
//           style={{
//             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${data[1].urlToImage})`,
//           }}
//         >
//           <p>{data[1].title}</p>
//         </div>
