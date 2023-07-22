import { postLogout } from "apis/user";
import { useMutation } from "react-query";
import { useCookies } from "react-cookie";

export const useLogoutMutation = () => {
  const [, , removeCookie] = useCookies(["accessToken"]);
  return useMutation(() => postLogout(), {
    onSuccess: () => {
      removeCookie("accessToken");
      window.location.reload();
    },
  });
};
