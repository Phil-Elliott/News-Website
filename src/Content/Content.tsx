import React from "react"
import "./Content.scss"

const Content = ({
  fakeData,
  data,
  change,
}: {
  fakeData: any
  data: any
  change: any
}) => {
  const check = () => {
    console.log(fakeData)
  }

  return (
    <div className="content">
      {fakeData.urlToImage ? (
        <div className="left-content">
          <h1>{fakeData.title}</h1>
          <h2>{fakeData.author}</h2>
          <h3>{fakeData.source.name}</h3>
          <img src={fakeData.urlToImage} alt="" />
          <p>{fakeData.content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel voluptate facere, maxime dignissimos vitae accusamus,
            accusantium tempora a quod saepe, atque aliquid ipsa nisi laborum
            adipisci molestias nobis officiis? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Veritatis vel voluptate facere, maxime
            dignissimos vitae accusamus, accusantium tempora a quod saepe, atque
            aliquid ipsa nisi laborum adipisci molestias nobis officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel voluptate facere, maxime dignissimos vitae accusamus,
            accusantium tempora a quod saepe, atque aliquid ipsa nisi laborum
            adipisci molestias nobis officiis? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Veritatis vel voluptate facere, maxime
            dignissimos vitae accusamus, accusantium tempora a quod saepe, atque
            aliquid ipsa nisi laborum adipisci molestias nobis officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel voluptate facere, maxime dignissimos vitae accusamus,
            accusantium tempora a quod saepe, atque aliquid ipsa nisi laborum
            adipisci molestias nobis officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel voluptate facere, maxime dignissimos vitae accusamus,
            accusantium tempora a quod saepe, atque aliquid ipsa nisi laborum
            adipisci molestias nobis officiis? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Veritatis vel voluptate facere, maxime
            dignissimos vitae accusamus, accusantium tempora a quod saepe, atque
            aliquid ipsa nisi laborum adipisci molestias nobis officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel voluptate facere, maxime dignissimos vitae accusamus,
            accusantium tempora a quod saepe, atque aliquid ipsa nisi laborum
            adipisci molestias nobis officiis?
          </p>
        </div>
      ) : (
        <div className="left-content">
          <h1>{fakeData.fields.headline}</h1>
          <img src={fakeData.fields.thumbnail} alt="" />
          <p>
            {fakeData.fields.trailText} Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Veritatis vel voluptate facere, maxime dignissimos
            vitae accusamus, accusantium tempora a quod saepe, atque aliquid
            ipsa nisi laborum adipisci molestias nobis officiis? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Veritatis vel
            voluptate facere, maxime dignissimos vitae accusamus, accusantium
            tempora a quod saepe, atque aliquid ipsa nisi laborum adipisci
            molestias nobis officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel voluptate facere, maxime dignissimos vitae accusamus,
            accusantium tempora a quod saepe, atque aliquid ipsa nisi laborum
            adipisci molestias nobis officiis? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Veritatis vel voluptate facere, maxime
            dignissimos vitae accusamus, accusantium tempora a quod saepe, atque
            aliquid ipsa nisi laborum adipisci molestias nobis officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel voluptate facere, maxime dignissimos vitae accusamus,
            accusantium tempora a quod saepe, atque aliquid ipsa nisi laborum
            adipisci molestias nobis officiis? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Veritatis vel voluptate facere, maxime
            dignissimos vitae accusamus, accusantium tempora a quod saepe, atque
            aliquid ipsa nisi laborum adipisci molestias nobis officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel voluptate facere, maxime dignissimos vitae accusamus,
            accusantium tempora a quod saepe, atque aliquid ipsa nisi laborum
            adipisci molestias nobis officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel voluptate facere, maxime dignissimos vitae accusamus,
            accusantium tempora a quod saepe, atque aliquid ipsa nisi laborum
            adipisci molestias nobis officiis? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Veritatis vel voluptate facere, maxime
            dignissimos vitae accusamus, accusantium tempora a quod saepe, atque
            aliquid ipsa nisi laborum adipisci molestias nobis officiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            vel voluptate facere, maxime dignissimos vitae accusamus,
            accusantium tempora a quod saepe, atque aliquid ipsa nisi laborum
            adipisci molestias nobis officiis?
          </p>
        </div>
      )}
      <div className="right-content">
        <p onClick={check}>Top Stories</p>
        <div onClick={() => change("page", data[0])} className="top-article">
          <img src={data[0].urlToImage} alt="" />
          <p>{data[0].title}</p>
        </div>
        <div onClick={() => change("page", data[1])} className="top-article">
          <img src={data[1].urlToImage} alt="" />
          <p>{data[1].title}</p>
        </div>
        <div onClick={() => change("page", data[2])} className="top-article">
          <img src={data[2].urlToImage} alt="" />
          <p>{data[2].title}</p>
        </div>
        <div onClick={() => change("page", data[3])} className="top-article">
          <img src={data[3].urlToImage} alt="" />
          <p>{data[3].title}</p>
        </div>
        <div onClick={() => change("page", data[4])} className="top-article">
          <img src={data[4].urlToImage} alt="" />
          <p>{data[4].title}</p>
        </div>
      </div>
    </div>
  )
}

export default Content
