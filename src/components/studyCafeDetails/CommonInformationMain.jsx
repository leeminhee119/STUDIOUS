import styled from "styled-components";

const CommonInformationMain = ({
  mainInfo: { name, photos, accumResCnt, distance, hashtags },
}) => {
  return (
    <>
      <InformationHeader>
        <div className="left-side-header">
          <div className="left-side-header__title">{name}</div>
          <div className="left-side-header__distance">{distance}</div>
        </div>
        <div className="right-side-header__accumResCnt">{accumResCnt}</div>
      </InformationHeader>
    </>
  );
};

export default CommonInformationMain;

const InformationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-side-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    &__title {
      ${({ theme }) => theme.fonts.heading1Bold};
    }

    &__distance {
      ${({ theme }) => theme.fonts.body1};
      color: ${({ theme }) => theme.colors.mainDark};
    }
  }

  .right-side-header__accumResCnt {
    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.mainDark};
  }
`;
