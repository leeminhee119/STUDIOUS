import SwiperStudyCafeGridItems from "components/SwiperStudyCafeGridItems";

const DUMMY_DATA = [
  {
    cafeName: "스캇",
    photo: null,
    distance: "혜화역 도보 5분",
    grade: 4.7,
    hashtags: ["청결한", "친절한"],
    accumRevCnt: 2322,
  },
  {
    cafeName: "스캇",
    photo: null,
    distance: "혜화역 도보 5분",
    grade: 4.7,
    hashtags: ["청결한", "친절한"],
    accumRevCnt: 2322,
  },
  {
    cafeName: "스캇",
    photo: null,
    distance: "혜화역 도보 5분",
    grade: 4.7,
    hashtags: ["청결한", "친절한"],
    accumRevCnt: 2322,
  },
  {
    cafeName: "스캇",
    photo: null,
    distance: "혜화역 도보 5분",
    grade: 4.7,
    hashtags: ["청결한", "친절한"],
    accumRevCnt: 2322,
  },
  {
    cafeName: "스캇",
    photo: null,
    distance: "혜화역 도보 5분",
    grade: 4.7,
    hashtags: ["청결한", "친절한"],
    accumRevCnt: 2322,
  },
  {
    cafeName: "스캇",
    photo: null,
    distance: "혜화역 도보 5분",
    grade: 4.7,
    hashtags: ["청결한", "친절한"],
    accumRevCnt: 2322,
  },
  {
    cafeName: "스캇",
    photo: null,
    distance: "혜화역 도보 5분",
    grade: 4.7,
    hashtags: ["청결한", "친절한"],
    accumRevCnt: 2322,
  },
  {
    cafeName: "스캇",
    photo: null,
    distance: "혜화역 도보 5분",
    grade: 4.7,
    hashtags: ["청결한", "친절한"],
    accumRevCnt: 2322,
  },
  {
    cafeName: "스캇",
    photo: null,
    distance: "혜화역 도보 5분",
    grade: 4.7,
    hashtags: ["청결한", "친절한"],
    accumRevCnt: 2322,
  },
];

const Main = () => {
  return (
    <>
      <SwiperStudyCafeGridItems
        items={DUMMY_DATA}
        title={"오늘의 추천 스터디카페"}
      />
      <SwiperStudyCafeGridItems
        items={DUMMY_DATA}
        title={"이벤트 중인 스터디카페"}
      />
    </>
  );
};

export default Main;

// export
