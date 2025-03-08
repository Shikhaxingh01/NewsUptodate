import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinnerutil from "./Spinnerutil";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Capitalizes the first letter of the category
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Fetch news articles
  const updateNews = async () => {
    props.setProgress(10);
    setLoading(true);
    
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    
    let data = await fetch(url);
    props.setProgress(30);
    
    let parsedData = await data.json();
    props.setProgress(70);
    
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
  };

  // Fetch more data for infinite scrolling
  const fetchMoreData = async () => {
    setPage((prevPage) => prevPage + 1); // ✅ Functional update

    const nextPage = page + 1; // 🚨 This will not reflect the latest state immediately
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${nextPage}&pageSize=${props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    
    setArticles((prevArticles) => prevArticles.concat(parsedData.articles)); // ✅ Append new articles
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, [props.category]); // ✅ Update news when category changes

  return (
    <>
      <h1 className="text-center" style={{ margin: "30px 0px", marginTop: "50px" }}>
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      {loading && <Spinnerutil />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults} // ✅ Stops fetching when all articles are loaded
        loader={<Spinnerutil />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={element.description ? element.description.slice(0, 88) : " "}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  author={element.author}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apikey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
