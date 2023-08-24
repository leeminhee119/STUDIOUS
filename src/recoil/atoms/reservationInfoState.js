import { atom } from "recoil";

export const reservationInfoState = atom({
  key: "reservationInfoState",
  default: {
    date: "",
    startTime: "",
    endTime: "",
    duration: "",
    headcount: 0,
    price: 0,
  },
});
