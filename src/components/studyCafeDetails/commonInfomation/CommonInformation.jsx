import styled from "styled-components";
import CommonInformationMain from "./CommonInformationMain";
import CommonInformationPlace from "./CommonInformationPlace";

const CommonInformation = ({ cafeData }) => {
  return (
    <CommonInformationLayout>
      <CommonInformationMain mainInfo={cafeData} />
      <CommonInformationPlace placeInfo={cafeData} />
    </CommonInformationLayout>
  );
};

export default CommonInformation;

const CommonInformationLayout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
