import styled from 'styled-components';
import { COLORS, QUERIES } from '../constant';

const FooterWrapper = styled.footer`
  padding: 64px 24px 80px 24px;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr 100px;
    grid-template-rows: auto auto;
    grid-template-areas: 
      "title ."
      "dsc socials"
    ;
  }
  
  @media ${QUERIES.laptopAndUp}{
    padding: 0 165px 90px 165px;
    grid-template-columns: 2fr 4fr 100px;
    grid-template-rows: auto;
    grid-template-areas: 
      "title dsc socials"
    ;
  }
`;

const Logo = styled.div`
  margin-bottom: 32px;

  @media ${QUERIES.tabletAndUp} {
    grid-area: title;
  } 
`;

const Description = styled.p`
  line-height: 26px;
  font-size: 1rem;
  color: ${COLORS.primary.black};
  margin-bottom: 64px;
  max-width: 380px;

  span {
    font-weight: 700;
    margin-left: 8px;
  }

  @media ${QUERIES.tabletAndUp} {
    grid-area: dsc;
    margin-bottom: 0;
  } 
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

  @media ${QUERIES.tabletAndUp} {
    grid-area: socials;
    align-self: center;
  } 
`

function Footer():JSX.Element {
  return (
    <FooterWrapper>
      <Logo>
        <img src="./assets/logo.svg" alt="" />
      </Logo>
      <Description>
        All rights reserved © Equalizer 2021
        Have any problems? Contact us via social media or email us at  
        <span>equalizer@example.com</span>
      </Description>
      <SocialIcons>
        <img src="./assets/icon-facebook.svg" alt="facebook icon" />
        <img src="./assets/icon-instagram.svg" alt="instagram icon" />
        <img src="./assets/icon-twitter.svg" alt="twitter icon" />
      </SocialIcons>
    </FooterWrapper>
  )
}

export default Footer;