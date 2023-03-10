//import './App.css'
import styled from 'styled-components';
import {
  LoginContainer,
  PersonalInfo,
  Creator,
  InfoContainer
} from './components/index';

function App() {

  const GlobalContainer = styled.div`
    font-family: 'Open Sans', sans-serif;
    
  `;

  const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    margin: auto 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  return (
    <GlobalContainer>
      <Container>
        {/* <LoginContainer /> */}
        <InfoContainer />
        <Creator />
      </Container>
    </GlobalContainer>
  )
}

export default App
