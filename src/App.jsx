import { Route, Routes } from "react-router-dom";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import { ThemeProvider } from "styled-components";
import Layout from "components/Layout";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import Header from "components/header/Header";
import Main from "pages/Main";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import OAuthLogin from "pages/OAuthLogin";

function App() {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Header />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/oauth/kakao"
                element={<OAuthLogin platform={"kakao"} />}
              />
              <Route
                path="/oauth/naver"
                element={<OAuthLogin platform={"naver"} />}
              />
              <Route
                path="/oauth/google"
                element={<OAuthLogin platform={"google"} />}
              />
            </Routes>
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </CookiesProvider>
  );
}

export default App;
