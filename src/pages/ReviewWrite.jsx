import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as GoodIcon } from "assets/icons/good.svg";
import { ReactComponent as BadIcon } from "assets/icons/bad.svg";
import ReviewCafeList from "components/ReviewCafeList";
import StarRating from "components/review/StarRating";
import HashTagSelector from "components/review/HashTagSelector";
import PhotoUploader from "components/review/PhotoUploader";
import ContentInput from "components/review/ContentInput";

const ReviewWrite = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const review = location.state.review;

  const handleCancel = () => {
    navigate("/reviews");
  };

  const handleSubmit = () => {};

  return (
    <Wrapper>
      <ReviewText>리뷰 작성</ReviewText>
      <StyledReviewCafeList item={review} />
      <Separator />
      <StarText>별점 입력</StarText>
      <StarRating label="청결도" />
      <StarRating label="방음" />
      <StarRating label="비품상태" />
      <HashTagSelector />
      <RecommendText>
        다른 사용자들에게 추천하시나요? 의견을 알려주세요.
      </RecommendText>
      <RecommendButton>
        추천 <GoodIcon />
      </RecommendButton>
      <RecommendButton>
        비추천 <BadIcon />
      </RecommendButton>
      <PhotoText>사진 선택 </PhotoText>
      <PhotoUploader />
      <ContentText>내용 입력</ContentText>
      <ContentInput />
      <ButtonsWrapper>
        <CancelButton onClick={handleCancel}>취소하기</CancelButton>
        <SubmitButton onClick={handleSubmit}>작성하기</SubmitButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default ReviewWrite;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewText = styled.div`
  ${({ theme }) => theme.fonts.heading1Bold};
  color: ${({ theme }) => theme.colors.black};
  font-family: Noto Sans KR;
  width: 9.4rem;
  height: 3.5rem;
`;

const StyledReviewCafeList = styled(ReviewCafeList)`
  background-color: ${({ theme }) => theme.colors.mainDark};
  margin-left: 100rem;
  .CafeImage {
    margin-left: 10rem;
  }
`;

const Separator = styled.div`
  width: 112rem;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.gray300};
  margin-left: 6rem;
`;

const StarText = styled.div`
  ${({ theme }) => theme.fonts.body1Bold};
  color: ${({ theme }) => theme.colors.gray900};
  margin: 3rem 10rem;
`;

const RecommendText = styled.div`
  color: #000;
  font-family: Noto Sans KR;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RecommendButton = styled.button`
  color: ${({ theme }) => theme.colors.mainDark};
  width: 15rem;
  height: 4rem;
  border-radius: 1.2rem;
  border: 1px solid var(--main-color, #0027b0);
`;

const PhotoText = styled.div`
  ${({ theme }) => theme.fonts.body1Bold};
  color: ${({ theme }) => theme.colors.gray900};
  margin: 3rem 10rem;
`;

const ContentText = styled.div`
  ${({ theme }) => theme.fonts.body1Bold};
  color: ${({ theme }) => theme.colors.gray900};
  margin: 3rem 10rem;
`;

const ButtonsWrapper = styled.div``;
const CancelButton = styled.button`
  color: ${({ theme }) => theme.colors.mainDark};
  width: 15rem;
  height: 4rem;
  border-radius: 1.2rem;
  border: 1px solid var(--main-color, #0027b0);
`;
const SubmitButton = styled.button`
  color: ${({ theme }) => theme.colors.mainDark};
  width: 15rem;
  height: 4rem;
  border-radius: 1.2rem;
  border: 1px solid var(--main-color, #0027b0);
`;
