import React from "react"
import NewsSection from "./NewsSection/NewsSection"
import SecondarySections from "./SecondarySections/SecondarySections"

const HomePage = ({ fakeData }: { fakeData: any }) => {
  return (
    <div>
      <NewsSection fakeData={fakeData} />
      <SecondarySections fakeData={fakeData} />
      <SecondarySections fakeData={fakeData} />
      <SecondarySections fakeData={fakeData} />
      <SecondarySections fakeData={fakeData} />
    </div>
  )
}

export default HomePage
