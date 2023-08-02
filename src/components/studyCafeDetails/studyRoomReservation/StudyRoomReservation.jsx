import styled from "styled-components";
import { useState } from "react";
import TabContainer from "../TabContainer";
import Calendar from "components/Search/Calendar";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";

const StudyRoomReservation = () => {
  const [isShowCalendar, setIsShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString()
  );
  return (
    <>
      <TabContainer title={"스터디룸 예약"}>
        <SelectDateBox>
          <span>예약일자</span>
          <div onClick={() => setIsShowCalendar(() => !isShowCalendar)}>
            <span>{selectedDate}</span>
            <CalendarIcon />
          </div>
        </SelectDateBox>
        {isShowCalendar && <Calendar onSelectDate={() => {}} />}
      </TabContainer>
    </>
  );
};

export default StudyRoomReservation;

const SelectDateBox = styled.div`
  ${({ theme }) => theme.fonts.heading2}
  display: flex;
  gap: 3rem;
  align-items: center;

  > div {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;
