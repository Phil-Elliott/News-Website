import React from "react"
import NewsSection from "./NewsSection/NewsSection"
import SecondarySections from "./SecondarySections/SecondarySections"
import Weather from "./Weather/Weather"

const HomePage = ({
  topData,
  sportsData,
  travelData,
  futureData,
  cultureData,
  change,
}: {
  topData: any
  sportsData: any
  travelData: any
  futureData: any
  cultureData: any
  change: any
}) => {
  return (
    <div>
      <NewsSection data={topData} change={change} />
      <SecondarySections data={sportsData} change={change} name="sports" />
      <Weather />
      <div className="secondary-background">
        <SecondarySections data={travelData} change={change} name="travel" />
      </div>
      <SecondarySections data={futureData} change={change} name="future" />
      <SecondarySections data={cultureData} change={change} name="culture" />
    </div>
  )
}

export default HomePage
