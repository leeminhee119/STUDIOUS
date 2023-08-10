import styled from "styled-components";
import { ReactComponent as ThumbsUpIcon } from "assets/icons/thumbsUp.svg";
import ProgressBar from "components/common/ProgressBar";
import { detailsReviewsSelector } from "recoil/selectors/studyCafeDetails";
import { useRecoilValue } from "recoil";

const Reviews = () => {
  const {
    reviewInfo,
    recommendationRate,
    cleanliness,
    deafening,
    fixturesStatus,
    total,
  } = useRecoilValue(detailsReviewsSelector);

  return (
    <>
      <RecommendPercentageContainer>
        <div>
          <span>추천해요</span>
          <ThumbsUpIcon />
        </div>
        <ProgressBar width={700} percentage={recommendationRate} />
        <div className="percentage-text">{recommendationRate}%</div>
      </RecommendPercentageContainer>
    </>
  );
};

export default Reviews;

const RecommendPercentageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ${({ theme }) => theme.fonts.heading1Bold};
  span {
    margin-right: 1rem;
  }
`;
