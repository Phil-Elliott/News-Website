import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import Articles from "./ArticlesPage/Articles";
import Content from "./Content/Content";
import NewsFeed from "./NewsFeed/NewsFeed";
import Footer from "./Footer/Footer";

const App: React.FC = () => {
  const [topData, setTopData] = useState<any>();
  const [sportsData, setSportsData] = useState<any>();
  const [travelData, setTravelData] = useState<any>();
  const [futureData, setFutureData] = useState<any>();
  const [cultureData, setCultureData] = useState<any>();
  const [musicData, setMusicData] = useState<any>();
  const [tvData, setTvData] = useState<any>();
  const [weatherData, setWeatherData] = useState<any>();
  const [worklifeData, setWorklifeData] = useState<any>();
  const [mainData, setMainData] = useState<any>();
  const [changePage, setChangePage] = useState<string>("home");
  const [query, setQuery] = useState<any>("");
  const [searchResults, setSearchResults] = useState<any>();
  const [pageNumber, setPageNumber] = useState<any>(1);
  const [titleName, setTitleName] = useState<string>("News");

  const searchQuery = (number: number) => {
    const fetchItems = async () => {
      const result = await axios(
        `https://content.guardianapis.com/search?page=${number}&q=${query}&show-fields=headline,thumbnail,trailText,body,publication&api-key=eb7a9ca6-67a5-49cc-a553-058cf25815a6`
      );
      setSearchResults(result.data.response.results);
      change("search", "search");
    };
    fetchItems();
  };

  const changeSearchPage = (number: any) => {
    setPageNumber(number);
    searchQuery(number);
  };

  useEffect(() => {
    fetchNewsTags("uk", setTopData);
    fetchNewsTags("sport", setSportsData);
    fetchNewsTags("travel", setTravelData);
    fetchNewsTags("technology", setFutureData);
    fetchNewsTags("culture", setCultureData);
    fetchNewsTags("music", setMusicData);
    fetchNewsTags("music", setMusicData);
    fetchNewsTags("tv", setTvData);
    fetchNewsTags("weather", setWeatherData);
    fetchNewsTags("work", setWorklifeData);
  }, []);

  const fetchNewsTags = async (data: string, set: any) => {
    const result = await axios(
      `https://content.guardianapis.com/search?page-size=25&q=${data}&show-fields=headline,thumbnail,trailText,body,publication,lastModified&api-key=eb7a9ca6-67a5-49cc-a553-058cf25815a6`
    );
    set(result.data.response.results);
  };

  const change = (page: string, data: any) => {
    setTitleName(data);
    switch (data) {
      case "news":
        setMainData(topData);
        break;
      case "sports":
        setMainData(sportsData);
        break;
      case "travel":
        setMainData(travelData);
        break;
      case "future":
        setMainData(futureData);
        break;
      case "culture":
        setMainData(cultureData);
        break;
      case "music":
        setMainData(musicData);
        break;
      case "TV":
        setMainData(tvData);
        break;
      case "weather":
        setMainData(weatherData);
        break;
      case "worklife":
        setMainData(worklifeData);
        break;
      default:
        setMainData(data);
    }
    setChangePage(page);
  };

  return (
    <div className="App">
      <Header
        query={(q: any) => setQuery(q)}
        change={change}
        page={changeSearchPage}
      />
      <div className="main-container">
        {changePage === "home" ? (
          topData &&
          sportsData &&
          travelData &&
          futureData &&
          cultureData && (
            <HomePage
              topData={topData}
              sportsData={sportsData}
              travelData={travelData}
              futureData={futureData}
              cultureData={cultureData}
              change={change}
            />
          )
        ) : changePage === "articles" ? (
          mainData &&
          titleName !== "search" && (
            <Articles data={mainData} change={change} titleName={titleName} />
          )
        ) : changePage === "page" ? (
          <Content fakeData={mainData} data={topData} change={change} />
        ) : (
          searchResults && (
            <NewsFeed
              searchResults={searchResults}
              page={changeSearchPage}
              pageNumber={pageNumber}
              change={change}
            />
          )
        )}
      </div>
      {topData && <Footer change={change} />}
    </div>
  );
};

export default App;

/*

2) Checkout lighthouse score
3) Host it


*/
