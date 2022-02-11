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
      <div className="left-content">
        <h1>{fakeData.fields.headline}</h1>
        <h2>{fakeData.fields.publication}</h2>
        <img src={fakeData.fields.thumbnail} alt="" />
        <p>
          {fakeData.fields.trailText} Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Veritatis vel voluptate facere, maxime dignissimos
          vitae accusamus, accusantium tempora a quod saepe, atque aliquid ipsa
          nisi laborum adipisci molestias nobis officiis? Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Veritatis vel voluptate facere,
          maxime dignissimos vitae accusamus, accusantium tempora a quod saepe,
          atque aliquid ipsa nisi laborum adipisci molestias nobis officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          vel voluptate facere, maxime dignissimos vitae accusamus, accusantium
          tempora a quod saepe, atque aliquid ipsa nisi laborum adipisci
          molestias nobis officiis? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Veritatis vel voluptate facere, maxime dignissimos
          vitae accusamus, accusantium tempora a quod saepe, atque aliquid ipsa
          nisi laborum adipisci molestias nobis officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          vel voluptate facere, maxime dignissimos vitae accusamus, accusantium
          tempora a quod saepe, atque aliquid ipsa nisi laborum adipisci
          molestias nobis officiis? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Veritatis vel voluptate facere, maxime dignissimos
          vitae accusamus, accusantium tempora a quod saepe, atque aliquid ipsa
          nisi laborum adipisci molestias nobis officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          vel voluptate facere, maxime dignissimos vitae accusamus, accusantium
          tempora a quod saepe, atque aliquid ipsa nisi laborum adipisci
          molestias nobis officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          vel voluptate facere, maxime dignissimos vitae accusamus, accusantium
          tempora a quod saepe, atque aliquid ipsa nisi laborum adipisci
          molestias nobis officiis? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Veritatis vel voluptate facere, maxime dignissimos
          vitae accusamus, accusantium tempora a quod saepe, atque aliquid ipsa
          nisi laborum adipisci molestias nobis officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          vel voluptate facere, maxime dignissimos vitae accusamus, accusantium
          tempora a quod saepe, atque aliquid ipsa nisi laborum adipisci
          molestias nobis officiis?
        </p>
      </div>
      <div className="right-content">
        <p onClick={check}>Top Stories</p>
        <div onClick={() => change("page", data[0])} className="top-article">
          <img src={data[0].fields.thumbnail} alt="" />
          <p>{data[0].fields.headline}</p>
        </div>
        <div onClick={() => change("page", data[1])} className="top-article">
          <img src={data[1].fields.thumbnail} alt="" />
          <p>{data[1].fields.headline}</p>
        </div>
        <div onClick={() => change("page", data[2])} className="top-article">
          <img src={data[2].fields.thumbnail} alt="" />
          <p>{data[2].fields.headline}</p>
        </div>
        <div onClick={() => change("page", data[3])} className="top-article">
          <img src={data[3].fields.thumbnail} alt="" />
          <p>{data[3].fields.headline}</p>
        </div>
        <div onClick={() => change("page", data[4])} className="top-article">
          <img src={data[4].fields.thumbnail} alt="" />
          <p>{data[4].fields.headline}</p>
        </div>
      </div>
    </div>
  )
}

export default Content
