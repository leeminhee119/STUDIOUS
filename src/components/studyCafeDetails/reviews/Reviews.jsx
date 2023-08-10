import styled from "styled-components";
import { ReactComponent as ThumbsUpIcon } from "assets/icons/thumbsUp.svg";
import ProgressBar from "components/common/ProgressBar";
import { detailsReviewsSelector } from "recoil/selectors/studyCafeDetails";
import { useRecoilValue } from "recoil";
import StarsGrade from "components/common/StarsGrade";

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
      <StarsGradeContainer>
        <section className="left-section">
          <div className="left-section__grade">
            <div>청결도</div>
            <StarsGrade size={30} grade={cleanliness} />
            <div>{cleanliness}점</div>
          </div>
          <div className="left-section__grade">
            <div>방음</div>
            <StarsGrade size={30} grade={deafening} />
            <div>{deafening}점</div>
          </div>
          <div className="left-section__grade">
            <div>비품상태</div>
            <StarsGrade size={30} grade={fixturesStatus} />
            <div>{fixturesStatus}점</div>
          </div>
        </section>
        <section className="right-section">
          <div className="right-section__grade"></div>
          <div className="right-section__grade">
            <div>총점</div>
            <StarsGrade size={30} grade={total} />
            <div>{total}점</div>
          </div>
          <div className="right-section__grade"></div>
        </section>
      </StarsGradeContainer>
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
  margin-bottom: 5rem;
`;

const StarsGradeContainer = styled.div`
  display: flex;
  gap: 10rem;
  .left-section {
    width: 50%;
    &__grade {
      display: grid;
      grid-template-columns: 0.3fr 0.5fr 0.2fr;
      ${({ theme }) => theme.fonts.heading2};
      margin-bottom: 3.5rem;
    }
  }
  .right-section {
    width: 50%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    &__grade {
      display: grid;
      grid-template-columns: 0.3fr 0.5fr 0.2fr;
      ${({ theme }) => theme.fonts.heading2Bold};
      margin-bottom: 3.5rem;
    }
  }
  margin-bottom: 18rem;
`;
