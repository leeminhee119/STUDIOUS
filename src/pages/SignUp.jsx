import SignUpForm from "components/signUp/SignUpForm";
import { useRecoilValue } from "recoil";
import { oAuthSignUpState } from "recoil/atoms/oAuthSignUpState";

const SignUp = () => {
  const OAuthSignUpState = useRecoilValue(oAuthSignUpState);
  if (
    OAuthSignUpState.email &&
    OAuthSignUpState.providerId &&
    OAuthSignUpState.type
  ) {
    return (
      <SignUpForm
        isOAuth={true}
        email={OAuthSignUpState.email}
        providerId={OAuthSignUpState.providerId}
        type={OAuthSignUpState.type}
      />
    );
  }
  return <SignUpForm />;
};

export default SignUp;
