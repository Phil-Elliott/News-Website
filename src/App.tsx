import React, { useState, useEffect } from "react"
import "./App.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios"
import Header from "./Header/Header"
import HomePage from "./HomePage/HomePage"
import Articles from "./ArticlesPage/Articles"
import Content from "./Content/Content"
import Weather from "./Weather/Weather"

const App: React.FC = () => {
  const [topData, setTopData] = useState<any>()
  const [sportsData, setSportsData] = useState<any>()
  const [travelData, setTravelData] = useState<any>()

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios(
  //       `https://newsapi.org/v2/top-headlines?country=us&apiKey=c059878eb8a248959c5543585b80ba99`
  //     )

  //     setTopData(result.data.articles)
  //   }

  //   fetchItems()
  // }, [])

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios(
  //       `https://newsapi.org/v2/top-headlines?sources=espn&apiKey=c059878eb8a248959c5543585b80ba99`
  //     )
  //     setSportsData(result.data.articles)
  //   }
  //   fetchItems()
  // }, [])

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios(
  //       `https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=c059878eb8a248959c5543585b80ba99`
  //     )

  //     setTravelData(result.data.articles)
  //   }

  //   fetchItems()
  // }, [])

  const fakeData = {
    author: "Rae Ellen Bichell, Kaiser Health News",
    content:
      "What does it mean if a persons rapid antigen test result comes back positive after five days of isolation due to Covid-19? According to the experts, that person is most likely still carrying a viral … Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit reprehenderit nobis est ipsum sed voluptas ratione. Molestias molestiae tempore reprehenderit beatae magnam et soluta sapiente, odio quia! Labore, maiores dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod necessitatibus repellat nam nesciunt eligendi et eius provident beatae ipsa, placeat magni dolore at maxime minus officiis rem, ullam iste! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo soluta adipisci officiis eligendi pariatur nesciunt mollitia maiores dolorum. Voluptates hic facilis dolor nesciunt quo culpa, commodi reiciendis exercitationem eaque cupiditate.",
    title:
      "It’s Day 6 of Covid and a rapid test come backs positive. What should you do? - Yahoo News",
    source: "Yahoo Entertainment",
    img: "https://s.yimg.com/ny/api/res/1.2/hbdqy4Kks4ZmuI8UXBGRIA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/RixmI7yyXNl.BnnfUx2VHQ--~B/aD0xNjY3O3c9MjUwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/nbc_news_122/e70f061ca0ac975e38447c81dec2d522",
    article: "https://news.yahoo.com/day-6-covid-rapid-test-094115891.html",
  }

  return (
    <div className="App">
      <Header />
      {/* {topData && sportsData && travelData && (
        <HomePage
          topData={topData}
          sportsData={sportsData}
          travelData={travelData}
        />
      )} */}
      {/* {data && <Articles data={sportsData} />} */}
      {/* <Content fakeData={fakeData} /> */}
      <Weather />
    </div>
  )
}

export default App

/*----------------------------------------------------------------

Create each section 
1) Have each section with a linkable title 
2) Have a grid layout with each section ( could have diffirent one for the top section)
3) Maybe just use top links for these sections and

Create news objects to map through 
1) Could use the same design for each one

Create links pages
1) Use same style as the home page

Make news pages with the articles

Connect Searchbar to api and make it responsive
1) connect to api
2) Make responsive
3) Create search results page
4) Have links to pages at the bottom 


Extra
1) Show date on the top right of the page 
2) Show the current weather by grabbing the users location





create article page 
create search page 
*/
