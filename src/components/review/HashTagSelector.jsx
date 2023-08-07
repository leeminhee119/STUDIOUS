import React, { useState } from "react";
import styled from "styled-components";

const HashTagSelector = ({ onSelect }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = [
    "깨끗해요",
    "친절해요",
    "쾌적해요",
    "면접용",
    "역세권",
    "최신식",
    "접근성",
    "설명과동일",
    "조용해요",
    "갓성비",
    "집중잘돼요",
    "프라이빗",
  ];

  const handleTagSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <HashTagSelectorWrapper>
      <HashTagLabel>해시태그 선택</HashTagLabel>
      <HashTagList>
        {allTags.map((tag) => (
          <HashTagButton
            key={tag}
            isSelected={selectedTags.includes(tag)}
            onClick={() => handleTagSelect(tag)}>
            {tag}
          </HashTagButton>
        ))}
      </HashTagList>
      {/*  onSelect(selectedTags) */}
    </HashTagSelectorWrapper>
  );
};

const HashTagSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 10rem;
`;

const HashTagLabel = styled.div`
  ${({ theme }) => theme.fonts.body1Bold};
  color: ${({ theme }) => theme.colors.gray900};
  margin-bottom: 0.5rem;
`;

const HashTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const HashTagButton = styled.button`
  ${({ theme }) => theme.fonts.body2};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.main : theme.colors.gray100};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.gray700};
  border: none;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  outline: none;
`;

export default HashTagSelector;
