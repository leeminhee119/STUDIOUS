import { POST } from "./api";
import { getCookie } from "../utils/cookie";

/* 소셜 로그인 */
export const postOAuthLogin = async (code, platform) => {
  const { data } = await POST(`/oauth/authenticate/${platform}?code=${code}`);
  return data;
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
  const { data } = await POST("/members/login", body);
  return data;
};

/* 회원가입 */
export const postSignUp = async (body, failCallback) => {
  const { data } = await POST("/members/signup", body, "", failCallback);
  return data;
};
