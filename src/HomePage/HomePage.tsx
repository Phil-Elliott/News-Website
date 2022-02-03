import React from "react"
import NewsSection from "./NewsSection/NewsSection"
import SecondarySections from "./SecondarySections/SecondarySections"
import Weather from "./Weather/Weather"

const HomePage = ({ topData, change }: { topData: any; change: any }) => {
  return (
    <div>
      <NewsSection data={topData} change={change} />
      <SecondarySections data={topData} change={change} name="Sports" />
      <Weather />
      <div className="secondary-background">
        <SecondarySections data={topData} change={change} name="Travel" />
      </div>
      <SecondarySections data={topData} change={change} name="Future" />
      <SecondarySections data={topData} change={change} name="Culture" />
    </div>
  )
}

export default HomePage
