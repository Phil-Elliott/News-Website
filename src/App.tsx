import React, { useState, useEffect } from "react"
import "./App.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios"
import Header from "./Header/Header"
import HomePage from "./HomePage/HomePage"
import Articles from "./ArticlesPage/Articles"
import Content from "./Content/Content"
import NewsFeed from "./NewsFeed/NewsFeed"
import Footer from "./Footer/Footer"

const App: React.FC = () => {
  const [topData, setTopData] = useState<any>()
  const [mainData, setMainData] = useState<any>()
  const [changePage, setChangePage] = useState<string>("home")
  const [query, setQuery] = useState<any>("")
  const [searchResults, setSearchResults] = useState<any>()
  const [pageNumber, setPageNumber] = useState<any>(1)

  const searchQuery = () => {
    const fetchItems = async () => {
      const result = await axios(
        `https://content.guardianapis.com/search?page=${pageNumber}&q=${query}&show-fields=headline,thumbnail,trailText,body,publication&api-key=eb7a9ca6-67a5-49cc-a553-058cf25815a6`
      )
      setSearchResults(result.data.response.results)
      // console.log(result.data.response.results)
    }

    fetchItems()
  }

  const changeSearchPage = (number: any) => {
    setPageNumber(number)
    searchQuery()
  }

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=c059878eb8a248959c5543585b80ba99`
      )

      setTopData(result.data.articles)
      console.log(result.data.articles)
    }

    fetchItems()
  }, [])

  const change = (page: string, data: any) => {
    setChangePage(page)
    setMainData(data)
    console.log(mainData)
  }

  return (
    <div className="App">
      <Header query={(q: any) => setQuery(q)} searchQuery={searchQuery} />
      {changePage === "home" ? (
        topData && <HomePage topData={topData} change={change} />
      ) : changePage === "articles" ? (
        topData && <Articles data={mainData} change={change} />
      ) : (
        <Content fakeData={mainData} data={topData} change={change} />
      )}
      {/* {searchResults && (
        <NewsFeed
          searchResults={searchResults}
          page={changeSearchPage}
          pageNumber={pageNumber}
          change={change}
        />
      )} */}
      <Footer />
    </div>
  )
}

export default App

/*----------------------------------------------------------------




3) Have article links work and put content into content page 
4) Make all links work 
5) Maybe have the more links fetch from guardian api 
6) Add router dom



















1) Search bar
make search page 
have results show up 
change page by button at buttom and have the change page in fetch request 
plug pages into content section 

2) Make all links work 

3) Deploy to netifly or hostinger 


Search
- fetch data from a news api 
- Pass a state to grab the input from the search bar
- Console log the data at first
- Create a new page to show search content
- Have a bar at the bottom to go through the diffirent sections 
- Connect the data to the content page 



1) Connect Searchbar to api and make it responsive
  1) connect to api
  2) Make responsive
  3) Create search results page
  4) Have links to pages at the bottom 

2) Add other apis and connect to pages 

3) Make each image and title linkable
    1) title and nav links goes to appropriate section
    2) image goes to the article
  
4) Make a default for the weather app
    

    how to make titles linkable
      can use react router dom and maybe pass some data into it based off of what is clicked 


      
      use ternarys to switch between pages
      maybe use case function to choose which data the main data state is set to 






create a ternarys for all three pages
have each one switch based off of a change page state
  need to pass data as well (maybe just make an object for state to pass through)
    { 
      data
      maybe just pass through data[array for the article]
      dont need to pass through any data for the homepage 
    }
Header and footer will be the same
    data should already be fetched 
    more section can use functions to fetch the data




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


// const [sportsData, setSportsData] = useState<any>()
  // const [travelData, setTravelData] = useState<any>()


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

*/
