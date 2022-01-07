import styled from 'styled-components';
import { QUERIES } from '../constant';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 16px;
  padding-bottom: 166px;
  background-image: url(./assets/bg-main-mobile.png);
  background-repeat: no-repeat;
  background-position: 0% 100%;

  @media ${QUERIES.tabletAndUp} {
    background-image: url(./assets/bg-main-tablet.png);
    background-position: 50% 50%;
    overflow: hidden;
  }

  @media ${QUERIES.laptopAndUp} {
    background-image: url(./assets/bg-main-desktop.png);
    background-position: 40% 20%;
    padding: 0 165px 320px 165px;
  }
`;

const DecorativePatternImage = styled.div`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
    position: absolute;
    top: -32px;
    right: -32px;
    width: 250px;
  }

  @media ${QUERIES.laptopAndUp} {
    right: 0px;
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
  z-index: 1;

  @media ${QUERIES.tabletAndUp} {
    font-size: 4rem;
    line-height: 64px;
    max-width: 520px;
    margin-bottom: 28px;
  };

  @media ${QUERIES.laptopAndUp} {
    font-size: 5.5rem;
    line-height: 88px;
    margin-bottom: 40px;
    max-width: 1000px;
  };

`;

const Description = styled.p`
  line-height: 26px;

  @media ${QUERIES.tabletAndUp} {
    font-size: 1.125rem;
    line-height: 28px;
    max-width: 520px;
  };

  @media ${QUERIES.laptopAndUp} {
    font-size: 1.25rem;
    max-width: 1000px;
  }; 
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