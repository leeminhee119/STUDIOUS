import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 서버에서 가져온 데이터에 이미지가 없는 경우 사용할 대체 이미지입니다.
const IMG_DUMMY_URL =
  "https://www.idjnews.kr/news/photo/202008/124221_84195_2158.jpg";

const StudyCafeGridItem = ({ item }) => {
  const navigate = useNavigate();
  const handleClickItem = () => {
    navigate(`/studyCafe/${item.cafeId}`);
  };
  return (
    <ItemLayout>
      <ItemImageBox onClick={handleClickItem}>
        <img src={item.photo ?? IMG_DUMMY_URL} alt="스터디카페 이미지" />
      </ItemImageBox>
      <ItemDetails>
        <ItemDetailsTitle onClick={handleClickItem}>
          {item.cafeName}
          <div>⭐️ {item.grade}</div>
        </ItemDetailsTitle>
        <ItemDetailsMeta>{item.distance}</ItemDetailsMeta>
        <ItemDetailsHashtags>
          {item.hashtags.map((hashtag, hashtagIndex) => (
            <div key={hashtagIndex}>#{hashtag}</div>
          ))}
        </ItemDetailsHashtags>
      </ItemDetails>
    </ItemLayout>
  );
};

export default StudyCafeGridItem;

const ItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 28rem;
`;
const ItemImageBox = styled.div`
  width: 100%;
  img {
    border-radius: 2rem;
    width: 100%;
    height: 17.3rem;
  }
`;
const ItemDetails = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ItemDetailsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.fonts.body1Bold};
`;
const ItemDetailsMeta = styled.div`
  ${({ theme }) => theme.fonts.body2};
`;
const ItemDetailsHashtags = styled.div`
  color: ${({ theme }) => theme.colors.mainDark};
  ${({ theme }) => theme.fonts.caption1};
  display: flex;
  gap: 5px;
`;
