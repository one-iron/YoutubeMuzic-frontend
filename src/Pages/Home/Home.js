import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AritistItem from "./Item/ArtistItem";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/data/MainMock.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <HomeWrap>{data && <AritistItem itemData={data.item_list[0]} />}</HomeWrap>
  );
};

export default Home;

const HomeWrap = styled.div`
  width: 100%;
  height: 3000px;
  padding: 100px 50px;
`;
