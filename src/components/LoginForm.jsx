import React from 'react';
import styled from 'styled-components';
import { Creator } from './index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {

    const ContainerLogin = styled.div`
        border: 1px solid #BDBDBD;
        border-radius: 15px;
        width: 280px;
        padding: 3rem;
        display: flex;
        flex-direction: column;

        @media only screen and (max-width: 375px) {
            border: none;
            padding-bottom: 1rem;
        }

        form {
            width: 100%;
        }
    `;

    const DivInput = styled.div`
        position: relative;
        margin: 0.5rem 0;
        width: 83%;
    `;

    const InputGeneral = styled.input.attrs(props => ({
        type: props.type,
        placeholder: props.placeholder
    }))`
        ::placeholder{
            text-transform: capitalize;
            margin: 1rem 2rem;
            padding-left: 1.5rem;
        },
        :focus{
            outline: none;
        },
        input {
            width: 100%;
            position: relative;
            padding: 0.5rem 2.1rem;
            border-radius: 5px;
            border: 1px solid #BDBDBD;
        }
        
    `;

    const FontAwesomeIconStyles = {
        position: 'absolute',
        width: '1.3rem',
        height: '1rem',
        zIndex: '10',
        margin: '0.6rem 0 0 0.5rem',
        color: '#828282',

    }

    const BtnLogin = styled.button`
        background-color: #2F80ED;
        border-radius: 6px;
        margin-top: 0.3rem;
        font-weight: 600;
        cursor: pointer;
        padding: 0.3rem 0;
        color: #FFFFFF;
        width: 100%;

        :hover {
            background-color: #1f69ca;
            transition: ease-in-out 200ms;
        }
    `

    const DescriptionStyled = styled.p`
        font-size: ${props => props.fontSize};
        font-weight: ${props => props.fontWeight};
        letter-spacing: ${props => props.letterSpacing};
        display: flex;
        flex-direction: column;
        line-height: 16px;
        color: #707070;
    `;

    const BtnSocial = styled.button`
        background: url(${props => props.svgIcon}) no-repeat;
        width: 45px;
        height: 45px;
        cursor: pointer;
        border: 1px solid #FFF;
        margin: 0 0.35rem;
    `;

    const Span = styled.span`
        color: #2F80ED;
        font-size: 12px;
        cursor: pointer;
        margin: 0 0.3rem;
        margin-bottom: 0px;

    `;

    return (
        <div>
            <ContainerLogin>
                <div>
                    <img src='../../src/img/devchallenges.svg' />
                    <DescriptionStyled fontSize={'15px'} fontWeight={'bold'} letterSpacing={'-1px'}>
                        Join thousands of learners from around the world
                    </DescriptionStyled>
                    <DescriptionStyled fontSize={'13px'} fontWeight={300} letterSpacing={'-1px'}>
                        Master web development by making real life projects. There are multiple paths for you to choose
                    </DescriptionStyled>
                </div>
                <form>
                    <DivInput>
                        <FontAwesomeIcon icon={faEnvelope} style={FontAwesomeIconStyles} />
                        <InputGeneral type={'email'} placeholder={'Email'} />
                    </DivInput>
                    <DivInput>
                        <FontAwesomeIcon icon={faLock} style={FontAwesomeIconStyles} />
                        <InputGeneral type='password' placeholder='Password' />
                    </DivInput>
                    <BtnLogin>Start coding now</BtnLogin>
                </form>
                <DescriptionStyled fontSize={'12px'} fontWeight={300} letterSpacing={'0px'} style={{ textAlign: 'center' }}>
                    or continue with these social profile</DescriptionStyled>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <BtnSocial svgIcon={'../../src/img/Facebook.svg'} />
                    <BtnSocial svgIcon={'../../src/img/Gihub.svg'} />
                    <BtnSocial svgIcon={'../../src/img/Google.svg'} />
                    <BtnSocial svgIcon={'../../src/img/Twitter.svg'} />
                </div>
                <DescriptionStyled fontSize={'12px'} fontWeight={300} letterSpacing={'0px'} style={{ textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    Adready a member? <Span><a>Login</a></Span>
                </DescriptionStyled>
            </ContainerLogin>
        </div>
    )
}

export { LoginForm }