import styled from 'styled-components';
import PremiumCard from './PremiumCard';
import { COLORS, QUERIES } from '../constant';

const SectionWrapper = styled.section`
  position: relative;
  background-color: ${COLORS.primary.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;

  @media ${QUERIES.tabletAndUp} {
    height: 600px;
    margin-bottom: 140px;
    padding: 38px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-left: 165px;
    margin-right: 165px;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: -100px;
  width: 230px;

  @media ${QUERIES.tabletAndUp} {
    left: 64px;
    width: 270px;
  }

  @media ${QUERIES.tabletAndUp} {
    left: 102px;
    width: 312px;
  }
`;

function PhoneSection():JSX.Element {
  return (
    <SectionWrapper>
        <img src="./assets/bg-pattern-2.svg" alt="" />
      <ImageWrapper>
        <img src="./assets/illustration-app.png" alt="" />
      </ImageWrapper>
      <PremiumCard />
    </SectionWrapper>
  )
}

export default PhoneSection;