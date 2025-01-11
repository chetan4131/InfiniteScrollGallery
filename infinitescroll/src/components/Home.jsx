import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CardsContainer from "./CardsContainer";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    try {
      setLoading(true);
  
      setTimeout(async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
  
        const data = await res.json();
        setCard((prev) => [...prev, ...data]);
        setLoading(false); 
      }, 1500); 
  
    } catch (error) {
      console.error("Error fetching card data:", error);
      setLoading(false); 
    }
  };
  

  useEffect(() => {
    getCardData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <CardsContainer movieInfo={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;
