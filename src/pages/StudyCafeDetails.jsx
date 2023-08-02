import { useState } from "react";
import CommonInformation from "components/studyCafeDetails/commonInfomation/CommonInformation";
import NavBar from "components/studyCafeDetails/NavBar";
import StudyRoomReservation from "components/studyCafeDetails/studyRoomReservation/StudyRoomReservation";

const StudyCafeDetails = () => {
  const DUMMY_IMG_URL =
    "http://www.doits.co.kr/data/file/place/990343814_DLkXE5Uy_0dc8f9a7bd1dc4d18bf89d1e3a3877cc06ac77c4.jpg";
  const DUMMY_DATA = {
    cafe: {
      cafeId: "(카페 id)",
      name: "(카페 이름)",
      photos: [
        DUMMY_IMG_URL,
        DUMMY_IMG_URL,
        DUMMY_IMG_URL,
        DUMMY_IMG_URL,
        DUMMY_IMG_URL,
      ],
      accumResCnt: "(누적 예약 횟수)",
      distance: "(역까지 거리)",
      hashtags: ["해시테그1", "해시테그2"],
      introduction:
        "랭스는 Language(s)에 s를 붙인 복수형의 줄임말로 언어 공부나 대화가 필요한 다양한 활동을 할 수 있는 공간으로 만들고자 시작되었습니다. 스터디에 적합한 공간으로 시작되었습니다. 스터디에 적합한 공간으로 시작되었습니다. 스터디에 적합한 공간으로 시작되었습니다. 스터디에 적합한 공간으로 시작되었습니다. 스터디에 적합한 공간으로 시작되었습니다. 스터디에 적합한 공간으로 시작되었습니다. 스터디에 적합한 공간으로 시작되었습니다.",
      conveniences: ["룸 편의시설 이름1", "룸 편의시설 이름2"],
      notification: "(공지 사항)", // 공지사항이 없는 경우 null
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
      notice: ["유의 사항1", "유의 사항2"],
    },

    rooms: [
      {
        id: 1,
        name: "A룸",
        photos: [
          DUMMY_IMG_URL,
          DUMMY_IMG_URL,
          DUMMY_IMG_URL,
          DUMMY_IMG_URL,
          DUMMY_IMG_URL,
        ],
        canReserveDatetime: {
          // 해당 날짜 : (이용 가능 시간대)
          // ex. 이용 가능 시간이 10시 ~ 11시 => 10
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
        },
        conveniences: ["룸 편의시설 이름1", "룸 편의시설 이름2"],
      },
      {
        id: 2,
        name: "B룸",
        photos: [DUMMY_IMG_URL, DUMMY_IMG_URL],
        canReserveDatetime: {
          // 해당 날짜 : 이용 가능 시간대 리스트
          // ex. 이용 가능 시간이 10시 ~ 11시 => 10
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
          "yyyy-mm-dd": [9, 10, 11, 12, 13, 14, 21],
        },
        conveniences: ["룸 편의시설 이름1", "룸 편의시설 이름2"],
      },
    ],

    reviews: {
      aggregation: {
        recommendationRate: 90,
        cleanliness: 3,
        deafening: 4,
        fixturesStatus: 5,
        total: 4.6,
      },
      reviewInfo: [
        {
          grade: 5,
          email: "(작성자 email)",
          detail: "(작성 내용)",
          date: "(작성 날짜)",
          photos: [DUMMY_IMG_URL, DUMMY_IMG_URL],
        },
        {
          grade: 1,
          email: "(작성자 email)",
          detail: "(작성 내용)",
          date: "(작성 날짜)",
          photos: [],
        },
        {
          grade: 4,
          email: "(작성자 email)",
          detail: "(작성 내용)",
          date: "(작성 날짜)",
          photos: [],
        },
      ],
    },
  };
  const NAVBAR_CONTENTS = [
    {
      name: "스터디룸 예약",
      component: <StudyRoomReservation roomsData={DUMMY_DATA.rooms} />,
    },
    {
      name: "리뷰",
      component: <StudyRoomReservation />,
    },
    {
      name: "진행 중인 이벤트",
      component: <StudyRoomReservation />,
    },
    {
      name: "환불 정책",
      component: <StudyRoomReservation />,
    },
    {
      name: "유의사항",
      component: <StudyRoomReservation />,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <CommonInformation cafeData={DUMMY_DATA.cafe} />
      <NavBar
        navBarItems={NAVBAR_CONTENTS.map((content) => content.name)}
        onClickMenu={(idx) => setActiveIndex(idx)}
        activeIndex={activeIndex}
      />
      {NAVBAR_CONTENTS[activeIndex].component}
    </>
  );
};

export default StudyCafeDetails;
