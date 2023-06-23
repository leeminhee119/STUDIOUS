import styled from "styled-components";
import SearchBox from "./SearchBox";
import NavGuest from "./NavGuest";
import NavUser from "./NavUser";
import { useState } from "react";
import { getCookie } from "@/modules/cookie";

const HeaderDefault = () => {
  const [isUser, setIsUser] = useState(getCookie("accessToken") ? true : false);
  return (
    <HeaderLayout>
      <Logo>STUDIOUS</Logo>
      <SearchBox />
      {isUser ? <NavUser /> : <NavGuest />}
    </HeaderLayout>
  );
};

export default HeaderDefault;

const HeaderLayout = styled.section`
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  ${({ theme }) => theme.fonts.logo};
  color: ${({ theme }) => theme.colors.mainDark};
`;
