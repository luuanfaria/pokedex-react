import GlobalStyles from '../../assets/styles/global';
import Header from '../Header';

import Home from '../pages/Home';
import { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyles />

      <Container>
        <Header />
        <Home />
      </Container>
    </>
  );
}

export default App;
