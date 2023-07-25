import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/icons/search100.svg";
import { ReactComponent as MinusIcon } from "assets/icons/minus.svg";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeControler from "./TimeControler";

const SearchBar = ({ onSearch }) => {
  const [isInputMode, setIsInputMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCountOpen, setIsCountOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const hourlySchedules = [
    { startTime: "09:00", endTime: "10:00", available: true },
    { startTime: "10:00", endTime: "11:00", available: true },
    { startTime: "11:00", endTime: "12:00", available: true },
    { startTime: "12:00", endTime: "13:00", available: true },
    { startTime: "13:00", endTime: "14:00", available: true },
    { startTime: "14:00", endTime: "15:00", available: true },
    { startTime: "15:00", endTime: "16:00", available: true },
    { startTime: "16:00", endTime: "17:00", available: true },
    { startTime: "17:00", endTime: "18:00", available: true },
    { startTime: "18:00", endTime: "19:00", available: true },
    { startTime: "19:00", endTime: "20:00", available: true },
    { startTime: "20:00", endTime: "21:00", available: true },
    { startTime: "21:00", endTime: "22:00", available: true },
    { startTime: "22:00", endTime: "23:00", available: true },
    { startTime: "23:00", endTime: "24:00", available: true },
  ];
  const scrollWidths = [100, 120, 80, 90]; // 각 인덱스에 해당하는 스크롤 영역의 너비 값
  const scrollIndex = 1; // 데이터를 설정하세요
  const [startTimeIndex, setStartTimeIndex] = useState(undefined);
  const [endTimeIndex, setEndTimeIndex] = useState(undefined);

  const onSelectTimeBlock = (e, timeBlock, index) => {
    if (!timeBlock.disabled) {
      if (startTimeIndex === undefined) {
        // startTimeIndex가 아직 설정되지 않은 경우, 첫 번째 누른 시간 블록을 startTimeIndex로 설정합니다.
        setStartTimeIndex(index);
        setEndTimeIndex(undefined); // endTimeIndex를 초기화합니다.
      } else {
        // startTimeIndex가 이미 설정된 경우, 두 번째 누른 시간 블록을 endTimeIndex로 설정합니다.
        setEndTimeIndex(index);
      }
    }
  };

  const handleModalInput = () => {
    setIsInputMode(!isInputMode);
    setInputValue("");
  };

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleModalCalendar = () => {
    //날짜 및 시간 선택 버튼 클릭하면 모달 창 띄우고 닫기
    setIsCalendarOpen(!isCalendarOpen);
    setIsDatePickerOpen(!isDatePickerOpen); // 달력 열림/닫힘 상태를 업데이트
  };

  const handleModalHeadcount = () => {
    //인원 수 버튼 클릭하면 모달 창 띄우고 닫기
    setIsCountOpen(!isCountOpen);
  };

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSearch = () => {
    // 검색 조건 설정
    const searchOptions = {
      keyword: inputValue, // 검색어 입력값
      date: selectedDate.toISOString().slice(0, 10), // 선택한 날짜 (ISO 형식)
      startTime: hourlySchedules[startTimeIndex]?.startTime || "", // 시작 시간
      endTime: hourlySchedules[endTimeIndex]?.endTime || "", // 종료 시간
      headCount: count, // 인원 수
      sort: "평점-높은-순", // 기본 정렬 기준
    };

    // 검색 결과 요청
    onSearch(searchOptions);
  };

  return (
    <SearchBarWrapper>
      <SearchBarLayout>
        {isInputMode ? (
          <SearchBarInput
            type="text"
            placeholder="스터디카페 이름 혹은 위치"
            value={inputValue}
            onChange={handleChangeInput}
            autoFocus={isInputMode}
          />
        ) : (
          <SearchBarButtonText onClick={handleModalInput}>
            스터디카페 이름 혹은 위치
          </SearchBarButtonText>
        )}
        <SearchBarSeparator />
        {isCalendarOpen ? (
          <SearchBarButtonText onClick={handleModalCalendar}>
            날짜 및 시간 선택
            <CalendarModal onClick={(e) => e.stopPropagation()}>
              {isDatePickerOpen && (
                <>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    inline
                  />
                  <Divider />
                  {selectedDate && (
                    <SelectedDateText>
                      {selectedDate.toDateString()}
                    </SelectedDateText>
                  )}
                  <Divider />
                  <TimeControler
                    hourlySchedules={hourlySchedules}
                    scrollWidths={scrollWidths}
                    scrollIndex={scrollIndex}
                    onSelectTimeBlock={onSelectTimeBlock}
                    startTimeIndex={startTimeIndex}
                    endTimeIndex={endTimeIndex}
                  />
                </>
              )}
            </CalendarModal>
          </SearchBarButtonText>
        ) : (
          <SearchBarButtonText onClick={handleModalCalendar}>
            날짜 및 시간 선택
          </SearchBarButtonText>
        )}
        <SearchBarSeparator />
        {isCountOpen ? (
          <SearchBarButtonText onClick={handleModalHeadcount}>
            인원 수
            <CountModal onClick={(e) => e.stopPropagation()}>
              <CountModalTitle>인원</CountModalTitle>
              <CountButtonContainer>
                <CountButton onClick={handleDecreaseCount}>
                  <MinusIcon />
                </CountButton>
                <CountText>{count}</CountText>
                <CountButton onClick={handleIncreaseCount}>
                  <PlusIcon />
                </CountButton>
              </CountButtonContainer>
              <CountModalContent>만 13세 이상</CountModalContent>
            </CountModal>
          </SearchBarButtonText>
        ) : (
          <SearchBarButtonText onClick={handleModalHeadcount}>
            인원 수
          </SearchBarButtonText>
        )}
        <SearchBarButton onClick={onSearch}>
          <SearchIcon />
        </SearchBarButton>
      </SearchBarLayout>
    </SearchBarWrapper>
  );
};

export default SearchBar;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SearchBarLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100rem;
  height: 9rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.gray200};
  border-radius: 10rem;
  padding: 9px;
  margin-top: 11px;
`;
const SearchBarInput = styled.input`
  ${({ theme }) => theme.fonts.body1};
  border: none;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray200};
  color: ${({ theme }) => theme.colors.black};
  padding-left: 6rem;
`;
const SearchBarButtonText = styled.button`
  ${({ theme }) => theme.fonts.body1};
  border: none;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    cursor: pointer;
  }
`;
const SearchBarSeparator = styled.div`
  width: 0.1rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.gray300};
`;
const SearchBarButton = styled.button`
  width: 23rem;
  height: 7rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.mainDark};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 0;
`;
const CalendarModal = styled.div`
  position: fixed;
  top: 34%;
  left: 34%;
  width: 40rem;
  height: 50rem;
  background-color: #ffffff;
  border-radius: 2rem;
  z-index: 2;
`;
const CountModal = styled.div`
  position: fixed;
  justify-content: space-between;
  align-items: center;
  top: 34%;
  left: 70%;
  width: 40rem;
  height: 15rem;
  background-color: #ffffff;
  border-radius: 2rem;
  z-index: 2;
  &:hover {
    cursor: auto;
  }
`;
const CountModalTitle = styled.div`
  ${({ theme }) => theme.fonts.body1Bold};
  color: ${({ theme }) => theme.colors.black};
  padding: 2.4rem 33.4rem 1rem 3.2rem;
`;
const CountButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 26.5rem;
`;
const CountText = styled.div`
  ${({ theme }) => theme.fonts.heading2Bold};
  color: ${({ theme }) => theme.colors.black};
  padding: 0 2rem 0 3rem;
`;
const CountButton = styled.button`
  width: 3rem;
  height: 3rem;
`;
const CountModalContent = styled.div`
  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.gray500};
  text-align: left;
  padding-left: 3.2rem;
`;
const Divider = styled.div`
  width: 34rem;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.gray200};
  margin: 1rem 3rem 1rem 3rem;
`;
const SelectedDateText = styled.div`
  ${({ theme }) => theme.fonts.body2Bold};
  color: ${({ theme }) => theme.colors.black};
  margin-top: 1rem;
  padding: 0 2rem;
  margin: 0 0 0 4rem;
  text-align: left;
`;
