import styled from "styled-components";
import { formatNumberWithCommas } from "utils/formatNumber";

const StudyRoomItem = ({
  roomData: {
    id,
    name,
    minCount,
    maxCount,
    price,
    type,
    conveniences,
    canReserveDatetime,
    photos,
  },
}) => {
  return (
    <ItemContainer>
      <ItemLeftSection>
        <img src={photos[0]} alt="스터디룸 이미지" />
        <SmallImagesSlider gap={"9px"}>
          {photos.slice(1).map((photo, photoIndex) => {
            return <img key={photoIndex} src={photo} alt="스터디룸 이미지" />;
          })}
        </SmallImagesSlider>
      </ItemLeftSection>
      <ItemRightSection>
        <StudyCafeTopMainInfoBox>
          <div className="info">
            {name}
            <div className="info__sub">{`최소 ${minCount}인 ~ 최대 ${maxCount}인`}</div>
          </div>
          <div className="info">
            <div>{`${formatNumberWithCommas(price)}원`}</div>
            <div className="info__sub">
              {type === "PER_HOUR" ? "/ 시간" : "/ 인"}
            </div>
          </div>
        </StudyCafeTopMainInfoBox>
      </ItemRightSection>
    </ItemContainer>
  );
};

export default StudyRoomItem;

const ItemContainer = styled.div`
  width: 100%;
  height: 56rem;
  background-color: ${({ theme }) => theme.colors.mostLight};
  padding: 4rem;
  display: flex;
  gap: 8.5rem;
`;

const ItemLeftSection = styled.section`
  width: 50%;

  > img {
    border-radius: 2.5rem;
    width: 100%;
    height: 33rem;
    margin-bottom: 1.6rem;
  }
`;

const SmallImagesSlider = styled.div`
  display: flex;
  gap: ${({ gap }) => parseInt(gap) + "px"};
  padding-bottom: 0.7rem;
  overflow-x: auto;
  &::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.colors.gray200};
    border-radius: 1rem;
    height: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 1rem;
  }
  img {
    border-radius: 2rem;
    width: calc(30% - ${({ gap }) => parseInt(gap) + "px"});
    height: 10rem;
  }
`;

const ItemRightSection = styled.section`
  width: 50%;
`;

const StudyCafeTopMainInfoBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  ${({ theme }) => theme.fonts.heading1Bold};
  line-height: 3rem;
  div.info {
    display: flex;
    align-items: flex-end;
    &__sub {
      margin-left: 1rem;
      ${({ theme }) => theme.fonts.body2};
      color: ${({ theme }) => theme.colors.gray500};
    }
  }
`;
