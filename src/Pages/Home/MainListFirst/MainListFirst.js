import React from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import styled from "styled-components";

const MainListFirst = (props) => {
  return (
    <MainListFirstWrap>
      <CollectionTitle>
        {<SubTitle>{props.data.sub_title}</SubTitle>}
        <Title>{props.data.title}</Title>
      </CollectionTitle>

      <CollectionAlbums>
        <AlbumCarousel>
          {props.data.item_list.map((albumData) => (
            <AlbumCard
              key={albumData.id}
              category={albumData.category}
              title={albumData.title}
              subtitle={albumData.subtitle}
              thumbnail={albumData.thumbnail}
            />
          ))}
        </AlbumCarousel>
      </CollectionAlbums>
    </MainListFirstWrap>
  );
};

export default MainListFirst;

const MainListFirstWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 610.28px;
  top: 0;
  color: white;
  padding-top: 12vh;
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
  overflow: scroll;
  margin: 32px 88px 16px 88px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const AlbumCarousel = styled.div`
  width: 2000px;
  display: flex;
  flex-direction: row;
`;
