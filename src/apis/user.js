import { POST } from "./api";
import { setToken } from "../utils/setToken";
import { getCookie } from "../utils/cookie";

/* 소셜 로그인 */
export const getKakaoToken = async (code) => {
  const { data } = await POST(`/oauth/login/kakao?code=${code}`);
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

export const postNaverLogin = async (code) => {
  const { data } = await POST(`/oauth/login/naver?code=${code}`);
  console.log(data);
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

export const postGoogleLogin = async (code) => {
  const { data } = await POST(`/oauth/login/google?code=${code}`);
  setToken({ accessToken: data.accessToken, grantType: data.grantType });
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
  const { data } = await POST("/accounts/new", body);
  return data;
};
