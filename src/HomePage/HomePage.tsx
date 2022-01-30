import React from "react"
import NewsSection from "./NewsSection/NewsSection"
import SecondarySections from "./SecondarySections/SecondarySections"

const HomePage = ({
  topData,
  sportsData,
  travelData,
}: {
  topData: any
  sportsData: any
  travelData: any
}) => {
  return (
    <div>
      <NewsSection data={topData} />
      <SecondarySections data={sportsData} />
      <SecondarySections data={travelData} />
      <SecondarySections data={topData} />
      <SecondarySections data={topData} />
    </div>
  )
}

export default HomePage
