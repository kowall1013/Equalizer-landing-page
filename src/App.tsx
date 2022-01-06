import styled from 'styled-components';
import Header from './components/Header';
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
    </Wrapper>
  );
}

export default App;
