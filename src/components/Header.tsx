import styled from 'styled-components';
import { QUERIES } from '../constant';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 1rem;
  margin-bottom: 166px;
  background-image: url(./assets/bg-main-mobile.png);
  background-repeat: no-repeat;
  background-position: left 0px bottom -100px;
`;

const DecorativePatternImage = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
  }
`;

const Logo = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 64px;

  @media ${QUERIES.tabletAndUp} {
    margin-bottom: 95px;
  };
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 20px;

  @media ${QUERIES.tabletAndUp} {
    font-size: 4rem;
    line-height: 64px;
    max-width: 520px;
  };

`;

const Description = styled.p`
  line-height: 26px;
`;

function Header():JSX.Element {
  return (
    <HeaderWrapper>
      <DecorativePatternImage>
        <img src="./assets/bg-pattern-1.svg" alt="" />
      </DecorativePatternImage>
      <Logo>
        <img src="./assets/logo.svg" alt="" />
      </Logo>
      <Title>
        We make your music sound extraordinary.
      </Title>
      <Description>
        A system audio equalizer specifically designed for Android and iOS.
        Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer.
        Control bass, mids, treble, gain control, reverb, and more!
      </Description>
    </HeaderWrapper>
  )
}

export default Header;