import React, { useState, useEffect } from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import styled from "styled-components";

const MainList = (props) => {
  let scrollbar = null;
  const [scrollPoint, setScroll] = useState();
  const [screenWidth, setWidth] = useState(window.screen.width);
  return (
    <MainListWrap>
      <SlidePreviousBtn
        onClick={() => {
          scrollbar.scrollTo(0, 0);
          setScroll(0);
        }}
        scrollPoint={scrollPoint}
        screenWidth={screenWidth}
      />
      <SlideNextBtn
        onClick={() => {
          scrollbar.scrollTo(1429, 0);
          setScroll(1429);
        }}
        scrollPoint={scrollPoint}
        screenWidth={screenWidth}
      />
      <CollectionTitle>
        {<SubTitle>{props.data.sub_title}</SubTitle>}
        <Title>{props.data.title}</Title>
      </CollectionTitle>

      <CollectionAlbums
        ref={(ref) => (scrollbar = ref)}
        onScroll={() => {
          setScroll(scrollbar.scrollLeft);
        }}
      >
        <AlbumCarousel>
          {props.data.item_list.map((albumData, idx) => (
            <AlbumCard
              key={idx}
              category={albumData.category}
              title={albumData.title}
              subtitle={albumData.subtitle}
              thumbnail={albumData.thumbnail}
            />
          ))}
        </AlbumCarousel>
      </CollectionAlbums>
    </MainListWrap>
  );
};

export default MainList;

const MainListWrap = styled.div`
  position: relative;
  color: white;
  margin-bottom: 38px;
`;
const SlidePreviousBtn = styled.div`
  display: ${(props) => (props.scrollPoint > 150 ? "" : "none")};
  position: absolute;
  cursor: pointer;
  left: 65px;
  top: 55%;

  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
`;

const SlideNextBtn = styled.div`
  display: ${(props) =>
    props.scrollPoint < props.screenWidth - 600 || props.scrollPoint == null
      ? ""
      : "none"};
  position: absolute;
  cursor: pointer;
  right: 65px;
  top: 55%;

  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
`;

const CollectionTitle = styled.div`
  padding: 32px 88px 16px 88px;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

const SubTitle = styled.div`
  font-size: 18px;
  color: gray;
  margin-bottom: 2px;
`;

const Title = styled.div`
  font-size: 34px;
  font-weight: 700;
  color: white;
`;

const CollectionAlbums = styled.div`
  line-height: 1.3;
  letter-spacing: -0.01em;
  overflow-x: scroll;
  margin: 32px 100px 16px 100px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const AlbumCarousel = styled.div`
  display: flex;
  flex-direction: row;
`;
