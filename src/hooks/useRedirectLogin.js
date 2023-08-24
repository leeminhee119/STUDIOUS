import { getCookie } from "utils/cookie";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const useRedirectLogin = (path) => {
  const [NavigateLogin, setNavigateLogin] = useState(null);
  const handleRedirect = () => {
    try {
      if (!getCookie("accessToken")) {
        if (
          window.confirm(
            "로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?"
          )
        ) {
          setNavigateLogin(<Navigate to="/login" />);
        }
      } else if (path) {
        setNavigateLogin(<Navigate to={path} />);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    NavigateLogin,
    handleRedirect,
  };
};

export default useRedirectLogin;
