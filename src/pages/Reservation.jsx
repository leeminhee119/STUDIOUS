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
  roomPhoto: "",
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
  useEffect(() => handleRedirect(), [handleRedirect]);
  window.scrollTo(0, 0);
  const { date, startTime, endTime, duration, headcount, price } =
    useRecoilValue(reservationInfoState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedConveniences, setSelectedConveniences] = useState([]);
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
    </>
  );
};

export default Reservation;

const Title = styled.div`
  ${({ theme }) => theme.fonts.heading1Bold};
`;

const RemoteControlSection = styled.section`
  width: 30%;
  float: right;
  height: 100vh;
`;
