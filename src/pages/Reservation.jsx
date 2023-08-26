import styled from "styled-components";
import { reservationInfoState } from "recoil/atoms/reservationInfoState";
import { useRecoilValue } from "recoil";
import RemoteControl from "components/reservation/RemoteControl";
import { useState, useEffect } from "react";
import useRedirectLogin from "hooks/useRedirectLogin";
import Divider from "components/common/Divider";
import { EditableDiv } from "components/common/Editor";
import theme from "styles/theme";
import { formatNumberWithCommas } from "utils/formatNumber";
import { Fragment } from "react";

const DUMMY_DATA = {
  cafeName: "(스터디카페 이름)",
  refundPolicy: [
    {
      day: "이용 1일 전",
      rate: "10%",
    },
    {
      day: "이용 2일 전",
      rate: "10%",
    },
    {
      day: "이용 3일 전",
      rate: "10%",
    },
    {
      day: "이용 4일 전",
      rate: "10%",
    },
  ],
  roomPhoto: "https://via.placeholder.com/300x200",
  roomName: "(스터디룸 이름)",
  conveniences: ["편의시설 이름1", "편의시설 이름2"],
  paidConveniences: [
    {
      name: "HDMI",
      price: 2000,
    },
    {
      name: "모니터",
      price: 3000,
    },
  ],
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
  // window.scrollTo(0, 0);
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
              <CheckBoxListItem>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="sameAsPersonalInfo"
                    onChange={handleCheckSameAsPersonalInfo}
                  />
                  <label htmlFor="sameAsPersonalInfo">
                    회원 정보와 동일하게
                  </label>
                </div>
              </CheckBoxListItem>
            </Form>
          </div>
          <div className="right">
            <TitleSub>요청사항</TitleSub>
            <EditableDiv
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

        <Divider
          length="100%"
          style={{ backgroundColor: theme.colors.gray200 }}
        />

        <RowContainer>
          <TitleSub>유료 편의 시설</TitleSub>
          <CheckBoxList>
            {paidConveniences.map(({ name, price }, index) => {
              return (
                <CheckBoxListItem key={index}>
                  <div className="checkbox">
                    <input type="checkbox" id={name} />
                    <label htmlFor={name}>{name}</label>
                  </div>
                  <span>₩ {formatNumberWithCommas(price)}</span>
                </CheckBoxListItem>
              );
            })}
          </CheckBoxList>
        </RowContainer>

        <Divider
          length="100%"
          style={{ backgroundColor: theme.colors.gray200 }}
        />

        <RowContainer>
          <TitleSub>환불 규정</TitleSub>
          <EditableDiv readOnly={true}>
            <div>
              <div style={{ color: "red" }}>
                *이용 당일 이후의 환불 관련 사항은 호스트에게 적접 문의하셔야
                합니다.
              </div>
              <div>
                결제 후 2시간 이내에는 100% 환불이 가능합니다. (단, 이용시간
                전까지만 가능)
              </div>
            </div>
            <div>
              <RefundPolicyList>
                {refundPolicy.map(({ day, rate }, index) => {
                  return (
                    <Fragment key={index}>
                      <div>{day}</div>
                      <div>{`총 금액의 ${rate} 환불`}</div>
                    </Fragment>
                  );
                })}
              </RefundPolicyList>
            </div>
          </EditableDiv>
        </RowContainer>
      </MainSection>
    </>
  );
};

export default Reservation;

const Title = styled.div`
  ${({ theme }) => theme.fonts.heading1Bold};
`;

const TitleSub = styled(Title)`
  ${({ theme }) => theme.fonts.heading2Bold};
  margin-bottom: 2rem;
`;

const RemoteControlSection = styled.section`
  width: 30%;
  float: right;
  height: 100vh;
`;

const MainSection = styled.section`
  width: 70%;
  padding-right: 5rem;
`;

const RowContainer = styled.div`
  margin-bottom: 7rem;
  margin-top: 3rem;
  ${({ theme }) => theme.fonts.body1};
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
`;

const StudyRoomName = styled.div`
  ${({ theme }) => theme.fonts.heading2}
`;

const Form = styled.form`
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
`;

const CheckBoxList = styled.ul`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CheckBoxListItem = styled.li`
  .checkbox {
    display: flex;
    gap: 1rem;
  }
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const RefundPolicyList = styled.ul`
  margin-top: 4.5rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  row-gap: 1rem;
`;
