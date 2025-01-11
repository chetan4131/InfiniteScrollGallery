
import React, { useEffect, useState } from "react";

import "./App.css";
import CryptoList from "./components/CryptoList";
import SkeletonLoader from "./components/SkeletonLoader";
import Loader from "./components/Loader";


const PAGE_NUMBER = 1;

const App = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCoinsData = async () => {
      setLoading(true);
      setTimeout(async () => {
        try {
          const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=${page}&sparkline=false`
          );
          const data = await response.json();
          setCoinsData((prev) => [...prev, ...data]);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }, 1500);
    };

    fetchCoinsData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className='app'>
      <h1>Crypto Gallery</h1>
      <CryptoList coinsData={coinsData} />
      {loading && <><SkeletonLoader /> <Loader/></>}
    </div>
  );
};

export default App;
