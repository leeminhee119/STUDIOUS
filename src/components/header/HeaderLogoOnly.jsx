import styled from "styled-components";

const HeaderLogoOnly = () => {
  return (
    <HeaderLayout>
      <Logo>STUDIOUS</Logo>
    </HeaderLayout>
  );
};

export default HeaderLogoOnly;

const HeaderLayout = styled.section`
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray200};
  margin: 0 -16rem;
`;
const Logo = styled.div`
  ${({ theme }) => theme.fonts.logo};
  color: ${({ theme }) => theme.colors.mainDark};
`;
