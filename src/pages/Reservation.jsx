import styled from "styled-components";
import { reservationInfoState } from "recoil/atoms/reservationInfoState";
import { useRecoilValue } from "recoil";
import Divider from "components/common/Divider";

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
  const { date, startTime, endTime, duration, headcount, price } =
    useRecoilValue(reservationInfoState);
  return (
    <>
      <Title>{cafeName}</Title>
      <RemoteSection>
        <RemoteControlBox>
          <RemoteControlInfoBox>
            <div className="info-row">
              <div className="info-row__label">예약날짜</div>
              <div className="info-row__content">{date}</div>
            </div>
            <div className="info-row">
              <div className="info-row__label">예약시간</div>
              <div className="info-row__content">{`${startTime} - ${endTime} (${duration}시간)`}</div>
            </div>
            <div className="info-row">
              <div className="info-row__label">인원수</div>
              <div className="info-row__content">{headcount}</div>
            </div>
          </RemoteControlInfoBox>
          <Divider
            type="horizontal"
            style={{
              backgroundColor: `${({ theme }) => theme.colors.gray500}`,
            }}
          />
        </RemoteControlBox>
      </RemoteSection>
    </>
  );
};

export default Reservation;

const RemoteSection = styled.section`
  width: 30%;
  float: right;
  height: 100vh;
`;

const RemoteControlBox = styled.div`
  width: 35rem;
  margin: 0 auto;
  min-height: 48rem;
  border-radius: 2.5rem;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.main30}30;
  position: fixed;
`;

const RemoteControlInfoBox = styled.div`
  ${({ theme }) => theme.fonts.body2}
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  .info-row {
    display: flex;
    gap: 1rem;
    &__label {
      width: 30%;
    }
  }
`;
const Title = styled.div`
  ${({ theme }) => theme.fonts.heading1Bold};
`;
