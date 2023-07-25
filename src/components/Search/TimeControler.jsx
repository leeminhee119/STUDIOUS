import React, { useState } from "react";
import styled from "styled-components";

const TimeControler = ({
  hourlySchedules,
  scrollWidths,
  scrollIndex,
  onSelectTimeBlock,
  startTimeIndex,
  endTimeIndex,
}) => {
  const [isScrollLeftVisible, setScrollLeftVisible] = useState(false);
  const [isScrollRightVisible, setScrollRightVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseEnter = () => {
    setScrollLeftVisible(true);
    setScrollRightVisible(true);
  };

  const handleMouseLeave = () => {
    setScrollLeftVisible(false);
    setScrollRightVisible(false);
  };

  const handleScrollLeft = () => {
    setScrollPosition((prevScrollPosition) => prevScrollPosition - 1);
  };

  const handleScrollRight = () => {
    setScrollPosition((prevScrollPosition) => prevScrollPosition + 1);
  };

  return (
    <TimeControlerWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {isScrollLeftVisible && (
        <ScrollButtonLeft onClick={handleScrollLeft}>{"<"}</ScrollButtonLeft>
      )}
      <TimeList>
        {hourlySchedules.map((timeBlock, index) => (
          <TimeItem
            key={index}
            disabled={timeBlock.disabled}
            selected={
              (endTimeIndex === undefined && startTimeIndex === index) ||
              (endTimeIndex !== undefined &&
                startTimeIndex <= index &&
                index <= endTimeIndex)
            }
            onClick={(e) => onSelectTimeBlock(e, timeBlock, index)}>
            <TimeText>{!index ? "\u00A0" : timeBlock.unitStartTime}</TimeText>
          </TimeItem>
        ))}
      </TimeList>
      {isScrollRightVisible && (
        <ScrollButtonRight onClick={handleScrollRight}>{">"}</ScrollButtonRight>
      )}
    </TimeControlerWrapper>
  );
};

export default TimeControler;

const TimeControlerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TimeList = styled.ul`
  list-style: none;
  display: flex;
  width: 34.2rem;
  height: 3.5rem;
`;
const TimeItem = styled.li`
  width: 3.6rem;
  height: 3.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: none;
  margin: 0.1rem;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.mainDark : "rgba(0, 39, 176, 0.3)"};
`;
const TimeText = styled.span`
  ${({ theme }) => theme.fonts.body2Bold};
  color: ${({ theme }) => theme.colors.black}; //#000000
`;
const ScrollButtonLeft = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;
  position: absolute;
  left: 10%;
  top: 63%;
  transform: translateY(-50%);
`;
const ScrollButtonRight = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;
  position: absolute;
  right: 10%;
  top: 63%;
  transform: translateY(-50%);
`;
