//import './App.css'
import styled from 'styled-components';
import {
  LoginContainer,
  PersonalInfo,
  Creator,
  InfoContainer,
  ChangeInfo,
  ChangeInfoContainer
} from './components/index';

function App() {

  const GlobalContainer = styled.div`
    font-family: 'Open Sans', sans-serif;
  `;

  const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  return (
    <GlobalContainer>
      <Container>
        {/* <LoginContainer /> */}
        {/* <InfoContainer /> */}
        <ChangeInfoContainer />
      </Container>
    </GlobalContainer>
  )
}

export default App
