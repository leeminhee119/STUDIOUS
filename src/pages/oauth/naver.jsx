import { useEffect } from "react";
import { postNaverLogin } from "../api/socialLoginLogout";
import { useNavigate } from "react-router-dom";

const Naver = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    postNaverLogin(code);
    navigate("/");
  }, []);
  return <>로그인 중입니다.</>;
};

export default Naver;
