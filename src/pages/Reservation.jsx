import styled from "styled-components";
import { reservationInfoState } from "recoil/atoms/reservationInfoState";
import { useRecoilValue } from "recoil";
import RemoteControl from "components/reservation/RemoteControl";
import { useState, useEffect } from "react";
import useRedirectLogin from "hooks/useRedirectLogin";

const DUMMY_DATA = {
  cafeName: "(스터디카페 이름)",
  refundPolicy: {
    0: 0, // 이용 당일   :   0% 환불
    1: 50, // 이용 1일 전 :  50% 환불
    2: 50, // 이용 2일 전 :  50% 환불
    3: 50, // 이용 3일 전 :  50% 환불
    4: 50, // 이용 4일 전 :  50% 환불
    5: 50, // 이용 5일 전 :  50% 환불
    6: 100, // 이용 6일 전 : 100% 환불
    7: 100, // 이용 7일 전 : 100% 환불
    8: 100, // 이용 8일 전 : 100% 환불
  },
  roomPhoto: "https://via.placeholder.com/300x200",
  roomName: "(스터디룸 이름)",
  conveniences: ["편의시설 이름1", "편의시설 이름2"],
  paidConveniences: {
    "유료 편의시설 이름1": 2000,
    "유료 편의시설 이름2": 3000,
  },
  username: "이민희",
  userphoneNumber: "01089292505",
};
const Reservation = () => {
  const {
    cafeName,
    refundPolicy,
    roomName,
    roomPhoto,
    conveniences,
    paidConveniences,
    username,
    userphoneNumber,
  } = DUMMY_DATA;
  const { handleRedirect } = useRedirectLogin(true);
  useEffect(() => {
    handleRedirect();
  }, [handleRedirect]);
  window.scrollTo(0, 0);
  const { date, startTime, endTime, duration, headcount, price } =
    useRecoilValue(reservationInfoState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedConveniences, setSelectedConveniences] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phoneNumber: "",
    request: "",
  });

  const handleChangeMemberInfo = (e, key) => {
    let name = userInfo.name;
    let phoneNumber = userInfo.phoneNumber;
    if (key === "name") name = e.target.value;
    else if (key === "phoneNumber") phoneNumber = e.target.value;
    else
      throw new Error(
        "name, phoneNumber 중 어떤 값이 변경되었는지 인자를 전달해주세요"
      );
    setUserInfo((userInfo) => ({
      ...userInfo,
      name,
      phoneNumber,
    }));
  };

  const handleCheckSameAsPersonalInfo = (e) => {
    if (e.target.checked) {
      setUserInfo((userInfo) => ({
        ...userInfo,
        name: username,
        phoneNumber: userphoneNumber,
      }));
    }
  };
  return (
    <>
      <Title>{cafeName}</Title>

      <RemoteControlSection>
        <RemoteControl
          date={date}
          startTime={startTime}
          endTime={endTime}
          duration={duration}
          headcount={headcount}
          selectedConveniences={selectedConveniences}
          totalPrice={totalPrice}
        />
      </RemoteControlSection>
      <MainSection>
        <TwoColumnContainer>
          <div className="left">
            <img src={roomPhoto} alt="스터디룸 이미지" />
          </div>
          <div className="right">
            <StudyRoomName>{roomName}</StudyRoomName>
          </div>
        </TwoColumnContainer>
        <TwoColumnContainer>
          <div className="left">
            <TitleSub>예약자 정보</TitleSub>
            <Form onSubmit={(e) => e.preventDefault()}>
              <div className="input-row">
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  id="name"
                  value={userInfo.name}
                  onChange={(e) => handleChangeMemberInfo(e, "name")}
                />
              </div>
              <div className="input-row">
                <label htmlFor="contact">연락처</label>
                <input
                  type="text"
                  id="contact"
                  value={userInfo.phoneNumber}
                  onChange={(e) => handleChangeMemberInfo(e, "phoneNumber")}
                />
              </div>
              <div className="input-row--checkbox">
                <input
                  type="checkbox"
                  id="sameAsPersonalInfo"
                  onChange={handleCheckSameAsPersonalInfo}
                />
                <label htmlFor="sameAsPersonalInfo">회원 정보와 동일하게</label>
              </div>
            </Form>
          </div>
          <div className="right">
            <TitleSub>요청사항</TitleSub>
            <textarea
              placeholder="요청하실 내용을 입력해주세요."
              onChange={(e) =>
                setUserInfo((userInfo) => ({
                  ...userInfo,
                  request: e.target.value,
                }))
              }
            />
          </div>
        </TwoColumnContainer>
        <RowContainer></RowContainer>
      </MainSection>
    </>
  );
};

export default Reservation;

const Title = styled.div`
  ${({ theme }) => theme.fonts.heading1Bold};
  margin-bottom: 3rem;
`;

const TitleSub = styled(Title)`
  ${({ theme }) => theme.fonts.heading2Bold};
`;

const RemoteControlSection = styled.section`
  width: 30%;
  float: right;
  height: 100vh;
  margin-left: 5rem;
`;

const MainSection = styled.section`
  width: 70%;
`;

const RowContainer = styled.div`
  margin-bottom: 10rem;
`;

const TwoColumnContainer = styled(RowContainer)`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  .left {
    img {
      border-radius: 1.5rem;
      max-width: 100%;
    }
  }
  .right {
    textarea {
      resize: none;
      width: 100%;
      height: 15rem;
      border: none;
      background-color: ${({ theme }) => theme.colors.mostLight};
      border-radius: 2.5rem;
      padding: 3rem;
    }
  }
`;

const StudyRoomName = styled.div`
  ${({ theme }) => theme.fonts.heading2}
`;

const Form = styled.form`
  ${({ theme }) => theme.fonts.body1};
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  .input-row {
    display: grid;
    grid-template-columns: 1fr 4fr;

    input {
      margin-left: 1rem;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
  .input-row--checkbox {
    display: flex;
    gap: 1rem;
  }
`;
