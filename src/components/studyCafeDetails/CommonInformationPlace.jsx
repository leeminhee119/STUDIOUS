import styled from "styled-components";

const CommonInformationPlace = ({
  placeInfo: { introduction, conveniences },
}) => {
  return (
    <>
      <TitleBox>공간 소개</TitleBox>
      <PlaceIntroContainer>
        <PlaceIntroTextBox>
          <div>
            <p>{introduction}</p>
          </div>
        </PlaceIntroTextBox>
        <PlaceIntroIconsBox></PlaceIntroIconsBox>
      </PlaceIntroContainer>
    </>
  );
};

export default CommonInformationPlace;

const TitleBox = styled.div`
  ${({ theme }) => theme.fonts.heading1Bold};
`;

const PlaceIntroContainer = styled.div`
  display: flex;
  border: 1rem solid ${({ theme }) => theme.colors.gray200};
  border-radius: 2.5rem;
`;

const PlaceIntroTextBox = styled.div`
  width: 50%;
  margin: 2rem 0;
  padding: 3rem 4.3rem;
  border-right: 1px solid;
  ${({ theme }) => theme.fonts.body1};
  div {
    height: 100%;
    position: relative;
  }
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: unset;
    text-overflow: ellipsis;

    &::before {
      content: url("data:image/svg+xml,%3Csvg width='18' height='10' viewBox='0 0 18 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.812 1L8.91514 9L1.01827 0.999999' stroke='%23101010'/%3E%3C/svg%3E%0A");
      position: absolute;
      right: 0;
      bottom: 0;
      padding-left: 1.5rem;
      background-color: #fff;
    }
  }
`;

const PlaceIntroIconsBox = styled.div`
  width: 50%;
  padding: 5.1rem 4.3rem;
`;
