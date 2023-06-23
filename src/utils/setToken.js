import { setCookie } from "./cookie";

export const setToken = ({ accessToken, grantType }) => {
  const expires = new Date();
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24);
  console.log("cookie setting");
  setCookie({
    key: "accessToken",
    value: `${grantType} ${accessToken}`,
    options: {
      path: "/",
      // expires,
      secure: true,
    },
  });

  // setCookie({
  //   key: 'refreshToken',
  //   value: refreshToken,
  //   options: {
  //     path: '/',
  //     // expires,
  //     secure: true,
  //   },
  // });
};
