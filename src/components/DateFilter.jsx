import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = ({ onDateFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState("1year");
  const [selectedStartDate, setSelectedStartDate] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() - 1))
  );
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onDateFilter(filter);
  };

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setSelectedStartDate(date);
  };

  return (
    <FilterContainer>
      <FilterButton
        active={selectedFilter === "1year"}
        onClick={() => handleFilterChange("1year")}>
        최근 1년
      </FilterButton>
      <FilterButton
        active={selectedFilter === "1week"}
        onClick={() => handleFilterChange("1week")}>
        1주일
      </FilterButton>
      <FilterButton
        active={selectedFilter === "1month"}
        onClick={() => handleFilterChange("1month")}>
        1개월
      </FilterButton>
      <FilterButton
        active={selectedFilter === "3months"}
        onClick={() => handleFilterChange("3months")}>
        3개월
      </FilterButton>
      <DatePickerContainer>
        <StyledDatePicker
          selected={selectedStartDate}
          onChange={handleStartDateChange}
          dateFormat="yyyy.MM.dd"
        />
        <StyledCalendarIcon />
      </DatePickerContainer>
      <DatePickerContainer>
        <StyledDatePicker
          selected={selectedEndDate}
          onChange={handleEndDateChange}
          dateFormat="yyyy.MM.dd"
        />
        <StyledCalendarIcon />
      </DatePickerContainer>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  margin-left: 9rem;
`;

const FilterButton = styled.button`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme, active }) => (active ? "#FFFFFF" : theme.colors.gray900)};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.mainDark : theme.colors.gray200};
  border: none;
  border-radius: 1rem;
  padding: 0.7rem 1.8rem;
  margin-right: 2rem;
  cursor: pointer;
`;

const DatePickerContainer = styled.div`
  display: flex;
  width: 15.5rem;
  height: 4rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  margin-left: 2rem;
  padding: 0.5rem;
`;

const StyledDatePicker = styled(DatePicker)`
  border: none;
  width: 10.5rem;
  ${({ theme }) => theme.fonts.body1Bold};
  color: ${({ theme }) => theme.colors.gray900};
  margin-left: 1rem;
`;

const StyledCalendarIcon = styled(CalendarIcon)`
  width: 2.3684rem;
  height: 2.5rem;
`;

export default DateFilter;
