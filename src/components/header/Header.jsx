import { useLocation } from "react-router-dom";
import HeaderSearch from "components/header/HeaderSearch";
import HeaderLogoOnly from "components/header/HeaderLogoOnly";

const Header = () => {
  const { pathname } = useLocation();
  const headerLogoPages = ["/login", "/signup"];
  return headerLogoPages.includes(pathname) ? (
    <HeaderLogoOnly />
  ) : (
    <HeaderSearch />
  );
};

export default Header;
