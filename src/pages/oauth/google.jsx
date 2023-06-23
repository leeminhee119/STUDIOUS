import { useEffect } from "react";
import { postGoogleLogin } from "../api/socialLoginLogout";
import { useNavigate } from "react-router-dom";

const Google = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    postGoogleLogin(code);
    navigate("/");
  }, []);
  return <>로그인 중입니다.</>;
};

export default Google;
