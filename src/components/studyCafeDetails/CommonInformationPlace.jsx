import { useState } from "react";
import styled from "styled-components";

const CommonInformationPlace = ({
  placeInfo: { introduction, conveniences },
}) => {
  const FOLD_TEXT = "간략히";
  const UNFOLD_TEXT = "더보기";
  const [isUnfold, setIsUnfold] = useState(false);
  const [toggleButtonText, setToggleButtonText] = useState(UNFOLD_TEXT);

  const handleToggleFold = () => {
    setIsUnfold(() => !isUnfold);
    setToggleButtonText(() =>
      toggleButtonText === UNFOLD_TEXT ? FOLD_TEXT : UNFOLD_TEXT
    );
  };

  return (
    <>
      <TitleBox>공간 소개</TitleBox>
      <PlaceIntroContainer>
        <PlaceIntroTextBox isUnfold={isUnfold}>
          <div>
            <span onClick={handleToggleFold}>{toggleButtonText}</span>
            {introduction}
          </div>
        </PlaceIntroTextBox>
        <PlaceIntroIconsBox></PlaceIntroIconsBox>
      </PlaceIntroContainer>
    </>
  );
};

export default CommonInformationPlace;

const TitleBox = styled.div`
  ${({ theme }) => theme.fonts.heading1Bold};
`;

const PlaceIntroContainer = styled.div`
  display: flex;
  border: 1rem solid ${({ theme }) => theme.colors.gray200};
  border-radius: 2.5rem;
`;

const PlaceIntroTextBox = styled.div`
  width: 50%;
  margin: 2rem 0;
  padding: 3rem 4.3rem;
  border-right: 1px solid;
  ${({ theme }) => theme.fonts.body1};
  ${({ isUnfold }) =>
    isUnfold
      ? `
      div {
        display: block;
        height: 100%;
      }
    `
      : `
      div {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: unset;
        text-overflow: ellipsis;
        height: 100%;
      }
    `}

  span {
    float: right;
    display: flex;
    align-items: flex-end;
    height: 100%;
    shape-outside: inset(calc(100% - 24px) 0 0 0);
    color: ${({ theme }) => theme.colors.main30};
  }
`;

const PlaceIntroIconsBox = styled.div`
  width: 50%;
  padding: 5.1rem 4.3rem;
`;
