import styled from 'styled-components';
import { COLORS } from '../constant';

const CardWrapper = styled.section`
  background-color: ${COLORS.primary.orange};
  padding: 48px 36px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  color: ${COLORS.primary.white};
  font-weight: 700;
  font-size: 2rem;
  line-height: 40px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: ${COLORS.primary.white};
  line-height: 28px;
  margin-bottom: 36px;
`;

const PriceWrapper = styled.div`
  display: flex;
  color: ${COLORS.primary.white};
  margin-bottom: 32px;
  align-items: center;
  gap: 16px;

  span {
    font-size: 4.0625rem;
    font-weight: 700;
    line-height: 52px;
  }

  p {
    font-size: 1.125rem;
    line-height: 32px;

    &::before {
      content: '/';
      display: inline-block;
      margin-right: 4px;
    }
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 0;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 32px;
  border: 1px solid transparent;
  border-radius: 12px;
  gap: 8px;

  img {
    height: 18px;
  }
`;

const IosButton = styled(Button)`
  background-color: ${COLORS.primary.black};
  color: ${COLORS.primary.white};
  margin-bottom: 16px;
`
const AndroidButton = styled(Button)`
  background-color: ${COLORS.primary.white};
  color: ${COLORS.primary.black};
`

function PremiumCard():JSX.Element {
  return (
    <CardWrapper>
      <Title>Premium EQ</Title>
      <Description>
        Get expert-level control with a robust equalizer, volume mixer, and spatial audio.
        Take your listening experience to a whole new level and access all our incredible features!
      </Description>
      <PriceWrapper>
        <span>$4</span>
        <p>month</p>
      </PriceWrapper>
      <IosButton>
        <img src="./assets/icon-apple.svg" alt="apple icon" />
        IOS Download
      </IosButton>
      <AndroidButton>
        <img src="./assets/icon-android.svg" alt="android icon" />
        Android Download
      </AndroidButton>
    </CardWrapper>
  )
}

export default PremiumCard;