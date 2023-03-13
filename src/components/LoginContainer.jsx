import React from 'react';
import { LoginForm, Creator } from './index';
import styled from 'styled-components';

const LoginContainer = () => {
    const Container = styled.div`
        width: 380px;
        display: flex;
        padding-top: 3rem;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    `

    return (
        <Container>
            <LoginForm />
            <Creator />
        </Container>
    )
}

export { LoginContainer }