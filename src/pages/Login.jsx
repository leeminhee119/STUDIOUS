import styled from "styled-components";
import { postLogin } from "apis/user";
import { useState } from "react";
import { setToken } from "utils/setToken";

const Login = () => {
  const [emailPassword, setEmailPassword] = useState({
    email: "",
    password: "",
  });
  const links = {
    kakao: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`,
    naver: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_REST_API_KEY}&state=test&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`,
    google: `https://accounts.google.com/o/oauth2/v2/auth?scope=email%20openid&response_type=code&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&client_id=${process.env.REACT_APP_GOOGLE_REST_API_KEY}`,
  };
  /* 일반 로그인 */
  const handleChangeEmail = (e) => {
    setEmailPassword((prevObj) => ({
      ...prevObj,
      email: e.target.value,
    }));
  };
  const handleChangePassword = (e) => {
    setEmailPassword((prevObj) => ({
      ...prevObj,
      password: e.target.value,
    }));
  };
  const handleLocalLogin = async (e) => {
    e.preventDefault();
    const { accessToken, grantType } = await postLogin(emailPassword);
    setToken({ accessToken, grantType });
  };
  const handleSocialLogin = (platform) => {
    window.location.href = links[platform];
  };

  const domain = {
    kakao: {
      themeColor: "#F7E600",
      fontColor: "#3F240F",
    },
    naver: {
      themeColor: "#1EC800",
      fontColor: "#FFFFFF",
    },
    google: {
      borderColor: "#C6C6C6",
      themeColor: "#FFFFFF",
      fontColor: `${({ theme }) => theme.colors.gray900}`,
    },
  };

  return (
    <LoginLayoutContainer>
      <LoginLayout>
        <LoginTypeTitle>이메일 로그인</LoginTypeTitle>
        <LoginInput onChange={handleChangeEmail} placeholder="이메일" />
        <LoginInput onChange={handleChangePassword} placeholder="비밀번호" />
        <LoginButton onClick={handleLocalLogin} type="submit" />
      </LoginLayout>

      <LoginLayout>
        <LoginTypeTitle>소셜 로그인</LoginTypeTitle>
        <SocialLoginButton
          domain={domain.kakao}
          onClick={() => handleSocialLogin("kakao")}
        >
          <div>카카오톡으로 로그인</div>
        </SocialLoginButton>
        <SocialLoginButton
          domain={domain.naver}
          onClick={() => handleSocialLogin("naver")}
        >
          <div>네이버로 로그인</div>
        </SocialLoginButton>
        <SocialLoginButton
          domain={domain.google}
          onClick={() => handleSocialLogin("google")}
        >
          <div>Google로 로그인</div>
        </SocialLoginButton>
      </LoginLayout>
    </LoginLayoutContainer>
  );
};

export default Login;
const LoginLayoutContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
`;
const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const LoginTypeTitle = styled.div`
  ${({ theme }) => theme.fonts.heading1Bold};
  margin-bottom: 2rem;
`;

const LoginInput = styled.input`
  width: 60rem;
  height: 6rem;
  padding-left: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray800};
  border-radius: 1.5rem;
  &::placeholder {
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray500};
  }
`;
const LoginButton = styled.input.attrs({
  type: "submit",
  value: "로그인",
})`
  width: 60rem;
  height: 6rem;
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.mainDark};
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.heading2Bold};
`;

const SocialLoginButton = styled.button`
  width: 60rem;
  height: 6rem;
  border: none;
  border-radius: 1.5rem;
  color: ${({ domain }) => domain.fontColor};
  border: 1px solid
    ${({ domain }) =>
      domain.borderColor ? domain.borderColor : domain.themeColor};
  background-color: ${({ domain }) => domain.themeColor};
  ${({ theme }) => theme.fonts.heading2};
`;
