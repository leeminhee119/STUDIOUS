import styled from "styled-components";
import StudyRoomReservation from "./studyRoomReservation/StudyRoomReservation";
import { useState } from "react";

const NAVBAR_CONTENTS = [
  {
    name: "스터디룸 예약",
    component: <StudyRoomReservation />,
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

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClickContent = (contentIndex) => {
    setActiveIndex(contentIndex);
  };

  return (
    <NavBarContainer>
      {NAVBAR_CONTENTS.map((contentItem, contentIndex) => (
        <NavBarItem
          isCurrent={contentIndex === activeIndex}
          onClick={() => handleClickContent(contentIndex)}
          key={contentIndex}
        >
          {contentItem.name}
        </NavBarItem>
      ))}
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.nav`
  margin: 5rem 0;
  display: flex;
  width: 100%;
  height: 5rem;
`;

const NavBarItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.heading2Bold}
  color: ${({ isCurrent, theme }) =>
    isCurrent ? theme.colors.mainDark : theme.colors.gray800};
  border-bottom: ${({ isCurrent, theme }) =>
    isCurrent ? `2px solid ${theme.colors.mainDark}` : `1px solid`};
  width: calc(100% / ${NAVBAR_CONTENTS.length});
`;
