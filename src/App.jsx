import { useLocation } from "react-router-dom";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import HeaderDefault from "./components/header/HeaderDefault";
import HeaderLogoOnly from "./components/header/HeaderLogoOnly";

function App() {
  const { pathname } = useLocation();
  const headerLogoPages = ["/login", "/signup"];
  const Header = headerLogoPages.includes(pathname)
    ? HeaderLogoOnly
    : HeaderDefault;
  return (
    <CookiesProvider>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle>
            <Layout>
              <Header />
            </Layout>
          </GlobalStyle>
        </ThemeProvider>
      </RecoilRoot>
    </CookiesProvider>
  );
}

export default App;
