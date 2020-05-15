import React, { useState, useEffect } from "react";
import MainThumbnail from "./MainThumbnail/MainThumbnail";
import MainList from "./MainList/MainList";
import styled from "styled-components";

const Home = () => {
  const [datas, setData] = useState();

  // collection id가 담겨진 배열을 받는 패치
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const [
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7,
      data8,
      data9,
    ] = await Promise.all([
      fetch(`http://localhost:3000/data/Collection0.json`),
      fetch(`http://localhost:3000/data/Collection1.json`),
      fetch(`http://localhost:3000/data/Collection2.json`),
      fetch(`http://localhost:3000/data/Collection3.json`),
      fetch(`http://localhost:3000/data/Collection4.json`),
      fetch(`http://localhost:3000/data/Collection5.json`),
      fetch(`http://localhost:3000/data/Collection6.json`),
      fetch(`http://localhost:3000/data/Collection7.json`),
      fetch(`http://localhost:3000/data/Collection8.json`),
    ]);

    const [
      data1Json,
      data2Json,
      data3Json,
      data4Json,
      data5Json,
      data6Json,
      data7Json,
      data8Json,
      data9Json,
    ] = await Promise.all([
      data1.json(),
      data2.json(),
      data3.json(),
      data4.json(),
      data5.json(),
      data6.json(),
      data7.json(),
      data8.json(),
      data9.json(),
    ]);

    setData([
      data1Json,
      data2Json,
      data3Json,
      data4Json,
      data5Json,
      data6Json,
      data7Json,
      data8Json,
      data9Json,
    ]);
  };

  return (
    <HomeWrap>
      {datas && <MainThumbnail imgData={datas[0].main_thumb} />}
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
