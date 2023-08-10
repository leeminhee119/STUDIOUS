import styled from "styled-components";
import { detailsStudyRoomsSelector } from "recoil/selectors/studyCafeDetails";
import { useRecoilValue } from "recoil";

const ReviewsList = ({ reviewData }) => {
  const studyRoomsData = useRecoilValue(detailsStudyRoomsSelector);
  return (
    <>
      <ListHeader>
        <select defaultValue="all">
          <option value="all">모든 스터디룸</option>
          {studyRoomsData.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
        <OrderBySelector>
          {["최신순", "평점 높은 순", "평점 낮은 순"].map(
            (option, optionIndex) => (
              <button
                key={optionIndex}
                className={optionIndex === 0 && "firstOption"}
              >
                {option}
              </button>
            )
          )}
        </OrderBySelector>
      </ListHeader>
    </>
  );
};

export default ReviewsList;

const ListHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainDark};
  select {
    ${({ theme }) => theme.fonts.body2};
    border: none;
    outline: none;
  }
`;

const OrderBySelector = styled.div`
  ${({ theme }) => theme.fonts.caption1};
  button:not(.firstOption) {
    border-left: 1px solid;
  }
`;
