import React from "react"
import NewsSection from "./NewsSection/NewsSection"
import SecondarySections from "./SecondarySections/SecondarySections"
import Weather from "./Weather/Weather"

const HomePage = ({ topData }: { topData: any }) => {
  return (
    <div>
      <NewsSection data={topData} />
      <SecondarySections data={topData} />
      <Weather />
      <div className="secondary-background">
        <SecondarySections data={topData} />
      </div>
      <SecondarySections data={topData} />
      <SecondarySections data={topData} />
    </div>
  )
}

export default HomePage
