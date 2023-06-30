import { postOAuthLogin } from "apis/user";
import { useMutation } from "react-query";

export const useOAuthLoginMutation = (code, platform, successCallback) => {
  return useMutation(() => postOAuthLogin(code, platform), {
    onSuccess: ({ exist, jwtTokenResponse, userInfo }) => {
      successCallback({ exist, jwtTokenResponse, userInfo });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
