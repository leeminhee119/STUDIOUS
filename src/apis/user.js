import { POST } from "./api";
import { setToken } from "../utils/setToken";
import { getCookie } from "../utils/cookie";

/* 소셜 로그인 */
export const postOAuthLogin = async (code, platform) => {
  const { data } = await POST(`/oauth/authenticate/${platform}?code=${code}`);
  setToken({ accessToken: data.accessToken, grantType: data.grantType });
};

export const postKakaoLogout = async () => {
  console.log(getCookie("accessToken"));
  const { data } = await POST(
    `/oauth/logout/kakao`,
    {},
    getCookie("accessToken")
  );
  return data;
};

export const postNaverLogout = async () => {
  console.log(getCookie("accessToken"));
  const { data } = await POST(
    `/oauth/logout/naver`,
    {},
    getCookie("accessToken")
  );
  return data;
};

export const postGoogleLogout = async () => {
  console.log(getCookie("accessToken"));
  const { data } = await POST(
    `/oauth/logout/google`,
    {},
    getCookie("accessToken")
  );
  return data;
};

/* 일반 로그인 */
export const postLogin = async (body) => {
  const { data } = await POST("/login", body);
  return data;
};

/* 회원가입 */
export const postSignUp = async (body) => {
  const { data } = await POST("/members/signup", body);
  return data;
};
