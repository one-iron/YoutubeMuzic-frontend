import React, { useState, useEffect, useCallback } from "react";
import MainThumbnail from "./MainThumbnail/MainThumbnail";
import MainList from "./MainList/MainList";
import { homeData } from "../../Config";
import styled from "styled-components";

const Home = () => {
  const [datas, setData] = useState();
  const [thumb, setThumb] = useState();
  const [array, setArray] = useState();
  const [count, setCount] = useState(0);
  const [boolean, setBoolean] = useState(false);

  const onScroll = useCallback(() => {
    if (
      count < 2 &&
      window.scrollY >= 410 * (count === 0 ? count + 1 : count + 3)
    ) {
      setCount(count + 1);
      setBoolean(true);
    }
  }, [count]);

  useEffect(() => {
    if (boolean === true && count <= 3) {
      fetch(
        `${homeData}?collection_id=${
          array[count === 1 ? 0 : 3]
        }&collection_id=${array[count == 1 ? 1 : 4]}&collection_id=${
          array[count === 1 ? 2 : 5]
        }`
      )
        .then((res) => res.json())
        .then((res) => {
          setData(datas.concat(res.contents));
        });
      setBoolean(false);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [boolean, count, datas, onScroll]);

  useEffect(() => {
    fetch(`${homeData}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.contents);
        setThumb(res.main_thumb);
        setArray(res.range_list);
      });
  }, []);
  return (
    <HomeWrap>
      {datas && <MainThumbnail imgData={thumb} />}
      <MainWrap>
        {datas &&
          datas.map((data, idx) => (
            <MainList data={data} key={idx} idx={idx} />
          ))}
      </MainWrap>
    </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled.div`
  width: 100%;
`;

const MainWrap = styled.div`
  position: absolute;
  top: 0;
  padding-top: 12vh;
  width: 100%;
`;
