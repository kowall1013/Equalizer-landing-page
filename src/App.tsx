import styled from 'styled-components';
import Header from './components/Header';
import PhoneSection from './components/PhoneSection';
import PremiumCard from './components/PremiumCard';
import Footer from './components/Footer';
import GlobalStyles from './globalStyles';
import { COLORS } from './constant';

const Wrapper = styled.div`
  color: ${COLORS.primary.black};
`

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <PhoneSection />
      <PremiumCard />
      <Footer />
    </Wrapper>
  );
}

export default App;
