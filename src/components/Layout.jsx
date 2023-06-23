import styled from "styled-components";

const Layout = ({ children }) => {
  return <MainSectionLayout>{children}</MainSectionLayout>;
};

const MainSectionLayout = styled.section`
  margin: 0 auto;
  max-width: 112rem;
`;

export default Layout;
