import styled from 'styled-components';
import { COLORS } from '../constant';

const SectionWrapper = styled.section`
  position: relative;
  background-color: ${COLORS.primary.black};
  display: flex;
  justify-content: center;
  border-radius: 12px 12px 0 0;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: -100px;
  width: 230px;
`;

function PhoneSection():JSX.Element {
  return (
    <SectionWrapper>
        <img src="./assets/bg-pattern-2.svg" alt="" />
      <ImageWrapper>
        <img src="./assets/illustration-app.png" alt="" />
      </ImageWrapper>
    </SectionWrapper>
  )
}

export default PhoneSection;