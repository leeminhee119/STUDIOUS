import styled from "styled-components";
import { ReactComponent as BellIcon } from "assets/icons/bell.svg";
import { ReactComponent as MessageIcon } from "assets/icons/message.svg";
import { ReactComponent as DefaultProfileIcon } from "assets/icons/defaultProfile.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
import { postKakaoLogout } from "apis/user";

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
