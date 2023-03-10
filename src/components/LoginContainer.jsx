import React from 'react';
import { LoginForm, AccountRegister } from './index';
import styled from 'styled-components';

const LoginContainer = () => {
    const Container = styled.div`
        width: 280px;
        padding: 3rem;
        border: 1px solid #BDBDBD;
        border-radius: 15px
    `

    return (
        <Container>
            <LoginForm />
            {/* <AccountRegister /> */}
        </Container>
    )
}

export { LoginContainer }