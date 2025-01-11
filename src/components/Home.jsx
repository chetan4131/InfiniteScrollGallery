import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCards, setPage, setLoading } from "../store";
import Loader from "./Loader";
import CardsContainer from "./CardsContainer";
import './Home.css'
import SkeletonLoader from "./SkeletonLoader";
const Home = () => {
  const dispatch = useDispatch();
  const { cards, page, loading } = useSelector((state) => state.cards);

  const getCardData = async () => {
    try {
      dispatch(setLoading(true));
      setTimeout(async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`
        );
        const data = await res.json();
        dispatch(setCards(data));
        dispatch(setLoading(false));
      }, 1500);
    } catch (error) {
      console.error("Error fetching card data:", error);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      dispatch(setPage());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <>
      <div className="home-container">
        <CardsContainer cardsInfo={cards} />
        {loading && <><SkeletonLoader /> <Loader /></>}
      </div>
    </>
  );
};

export default Home;
