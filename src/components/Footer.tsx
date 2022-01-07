import styled from 'styled-components';
import { COLORS } from '../constant';

const FooterWrapper = styled.footer`
  padding: 64px 24px 80px 24px;
`;

const Logo = styled.div`
  margin-bottom: 32px;
`;

const Description = styled.p`
  line-height: 26px;
  font-size: 1rem;
  color: ${COLORS.primary.black};
  margin-bottom: 64px;

  span {
    font-weight: 700;
    margin-left: 8px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
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