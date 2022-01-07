import styled from 'styled-components';
import Header from './components/Header';
import PhoneSection from './components/PhoneSection';
import Footer from './components/Footer';
import GlobalStyles from './globalStyles';
import { COLORS } from './constant';

const Wrapper = styled.div`
  color: ${COLORS.primary.black};
  max-width: 1440px;
  margin: 0 auto;
`

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <PhoneSection />
      <Footer />
    </Wrapper>
  );
}

export default App;
