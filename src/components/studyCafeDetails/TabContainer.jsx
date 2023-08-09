import styled from "styled-components";

const TabContainer = ({ title, children }) => {
  return (
    <ChildrenContainer>
      <TitleBox>{title}</TitleBox>
      {children}
    </ChildrenContainer>
  );
};

export default TabContainer;

const TitleBox = styled.div`
  ${({ theme }) => theme.fonts.heading1Bold};
  border-bottom: 5px solid ${({ theme }) => theme.colors.mainDark};
  padding-bottom: 5px;
  display: inline-flex;
  margin-bottom: 3rem;
`;

const ChildrenContainer = styled.div``;
