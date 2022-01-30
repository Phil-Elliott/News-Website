import React from "react"
import NewsSection from "./NewsSection/NewsSection"
import SecondarySections from "./SecondarySections/SecondarySections"

const HomePage = ({ data }: { data: any }) => {
  return (
    <div>
      <NewsSection data={data} />
      <SecondarySections data={data} />
      <SecondarySections data={data} />
      <SecondarySections data={data} />
      <SecondarySections data={data} />
    </div>
  )
}

export default HomePage
