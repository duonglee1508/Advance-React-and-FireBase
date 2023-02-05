import React, { useEffect, useState } from "react";

function withLoading(Component) {
  return (props) => {
    const [news, setNews] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
          "http://hn.algolia.com/api/v1/search?query=react"
        );
        const data = await response.json();
        console.log("fetchData ~ data", data);
        setNews(data.hits);
      }
      fetchData();
    }, []);
    if (!news || news.length === 0) return <div>Loading...</div>;
    return <Component data={news} {...props}></Component>;
  };
}

export default withLoading;
