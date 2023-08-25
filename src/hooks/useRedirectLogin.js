import { getCookie } from "utils/cookie";
import { useNavigate } from "react-router-dom";

const useRedirectLogin = () => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    try {
      if (!getCookie("accessToken")) {
        if (
          window.confirm(
            "로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?"
          )
        ) {
          navigate("/login");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleRedirect,
  };
};

export default useRedirectLogin;
