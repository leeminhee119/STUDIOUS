import styled from "styled-components";
import SearchBar from "components/Search/SearchBar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/");
  };

  const [searchResult, setSearchResult] = useState([]);
  //   const mockSearchResult = [
  //     {
  //       name: "스터디카페1",
  //       photo: "https://example.com/cafe1.jpg",
  //       accumRevCnt: 20,
  //       distance: "500m",
  //       grade: 4.5,
  //       hashtags: ["조용한", "와이파이 빠름", "좌석 넓음"],
  //     },
  //     {
  //       name: "스터디카페2",
  //       photo: "https://example.com/cafe2.jpg",
  //       accumRevCnt: 12,
  //       distance: "700m",
  //       grade: 3.8,
  //       hashtags: ["편안한", "음료 다양", "서비스 좋음"],
  //     },
  //     {
  //       name: "스터디카페3",
  //       photo: "https://example.com/cafe1.jpg",
  //       accumRevCnt: 20,
  //       distance: "500m",
  //       grade: 4.5,
  //       hashtags: ["조용한", "와이파이 빠름", "좌석 넓음"],
  //     },
  //     {
  //       name: "스터디카페4",
  //       photo: "https://example.com/cafe1.jpg",
  //       accumRevCnt: 20,
  //       distance: "500m",
  //       grade: 4.5,
  //       hashtags: ["조용한", "와이파이 빠름", "좌석 넓음"],
  //     },
  //     {
  //       name: "스터디카페5",
  //       photo: "https://example.com/cafe1.jpg",
  //       accumRevCnt: 20,
  //       distance: "500m",
  //       grade: 4.5,
  //       hashtags: ["조용한", "와이파이 빠름", "좌석 넓음"],
  //     },
  //     {
  //       name: "스터디카페6",
  //       photo: "https://example.com/cafe1.jpg",
  //       accumRevCnt: 20,
  //       distance: "500m",
  //       grade: 4.5,
  //       hashtags: ["조용한", "와이파이 빠름", "좌석 넓음"],
  //     },
  //     {
  //       name: "스터디카페7",
  //       photo: "https://example.com/cafe1.jpg",
  //       accumRevCnt: 20,
  //       distance: "500m",
  //       grade: 4.5,
  //       hashtags: ["조용한", "와이파이 빠름", "좌석 넓음"],
  //     },
  //     {
  //       name: "스터디카페8",
  //       photo: "https://example.com/cafe1.jpg",
  //       accumRevCnt: 20,
  //       distance: "500m",
  //       grade: 4.5,
  //       hashtags: ["조용한", "와이파이 빠름", "좌석 넓음"],
  //     },
  //     {
  //       name: "스터디카페9",
  //       photo: "https://example.com/cafe1.jpg",
  //       accumRevCnt: 20,
  //       distance: "500m",
  //       grade: 4.5,
  //       hashtags: ["조용한", "와이파이 빠름", "좌석 넓음"],
  //     },
  //   ];

  const handleSearch = async ({
    keyword,
    date,
    startTime,
    endTime,
    headCount,
    sort,
  }) => {
    // setSearchResult(mockSearchResult);
    // navigate("/search-result", { state: { searchResult: mockSearchResult } });

    const url = `http://localhost:8080/studious/search?page=1&keyword=${keyword}&date=${date}&startTime=${startTime}&endTime=${endTime}&headCount=${headCount}&sort=${sort}`;

    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        const responseData = response.data;
        setSearchResult(responseData);

        // 검색 결과를 SearchResult 페이지로 전달하고 페이지 이동
        navigate("/search-result", { state: { searchResult: responseData } });
      }
    } catch (error) {
      console.error("Error data:", error);
    }
  };

  return (
    <SearchContainer>
      <ModalOverlay onClick={closeModal} />
      <SearchBar onSearch={handleSearch} />
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalOverlay = styled.div`
  position: absolute;
  top: 30rem;
  left: 0;
  width: 100%;
  height: 70%;
  background-color: rgba(61, 61, 61, 0.5);
  z-index: 1;
`;

export default Search;
