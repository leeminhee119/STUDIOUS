import { useEffect } from "react";
import { postOAuthLogin } from "apis/user";
import { useNavigate } from "react-router-dom";

const OAuthLogin = ({ platform }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    postOAuthLogin(code, platform);
  }, [platform]);

  return <>로그인 중입니다.</>;
};

export default OAuthLogin;
