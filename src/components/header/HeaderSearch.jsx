import styled from "styled-components";
import SearchBox from "./SearchBox";
import NavGuest from "./NavGuest";
import NavUser from "./NavUser";
import { useEffect, useState } from "react";
import { getCookie } from "utils/cookie";

const HeaderSearch = () => {
  const [isUser, setIsUser] = useState(false);
  const cookie = getCookie("accessToken");
  useEffect(() => {
    cookie ? setIsUser(true) : setIsUser(false);
  }, [cookie]);
  return (
    <HeaderLayout>
      <Logo>STUDIOUS</Logo>
      <SearchBox />
      {isUser ? <NavUser /> : <NavGuest />}
    </HeaderLayout>
  );
};

export default HeaderSearch;

const HeaderLayout = styled.section`
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.div`
  ${({ theme }) => theme.fonts.logo};
  color: ${({ theme }) => theme.colors.mainDark};
`;
