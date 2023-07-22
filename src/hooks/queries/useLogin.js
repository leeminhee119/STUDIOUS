import { postLogin, postOAuthLogin } from "apis/user";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { alertFailMessage } from "utils/failCallback";
import { setToken } from "utils/setToken";

export const useOAuthLoginMutation = (code, platform, successCallback) => {
  return useMutation(() => postOAuthLogin(code, platform), {
    onSuccess: ({ exist, jwtTokenResponse, userInfo }) => {
      successCallback({ exist, jwtTokenResponse, userInfo });
    },
    onError: (error) => {
      if (error.response.status === 400) alertFailMessage(error.response.data);
    },
  });
};

export const useLoginMutation = (body) => {
  const navigate = useNavigate();
  return useMutation(() => postLogin(body), {
    onSuccess: ({ grantType, accessToken }) => {
      setToken({ accessToken, grantType });
      navigate("/");
    },
    onError: (error) => {
      if (error.response.status === 400) alertFailMessage(error.response.data);
    },
  });
};
