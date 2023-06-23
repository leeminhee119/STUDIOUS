import { useEffect } from "react";
import { getKakaoToken } from "../api/socialLoginLogout";
import { useNavigate } from "react-router-dom";

const Kakao = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    getKakaoToken(code);
    navigate("/");
  }, []);
  return <>로그인 중입니다.</>;
};

export default Kakao;
