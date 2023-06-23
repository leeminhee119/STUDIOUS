import styled from "styled-components";
import BellIcon from "@/public/icons/bell.svg";
import MessageIcon from "@/public/icons/message.svg";
import DefaultProfileIcon from "@/public/icons/defaultProfile.svg";
import MenuIcon from "@/public/icons/menu.svg";
import { postKakaoLogout } from "@/pages/api/socialLoginLogout";

const NavUser = () => {
  const handleLogout = () => {
    postKakaoLogout();
  };
  return (
    <NavLayout>
      <NavButton>
        <BellIcon />
      </NavButton>
      <NavButton>
        <MessageIcon />
      </NavButton>
      <NavButton>
        <DefaultProfileIcon />
      </NavButton>
      <NavButton>
        <MenuIcon />
        <div onClick={handleLogout}>로그아웃</div>
      </NavButton>
    </NavLayout>
  );
};

export default NavUser;
const NavLayout = styled.div`
  display: flex;
  gap: 1rem;
`;
const NavButton = styled.button``;
