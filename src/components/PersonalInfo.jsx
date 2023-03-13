import React from 'react'
import styled from 'styled-components';
import { Creator } from './index'

const PersonalInfo = () => {

    const PersonalContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin: 0 2rem;
        
        @media only screen and (max-width: 375px) {
            max-width: 375px;
            justify-content: center;
        }
    `;

    const TitleDiv = styled.div`
        text-align: center;
        line-height: 5px;
        padding-bottom: 1.5rem;

        @media only screen and (max-width: 375px) {
            padding-bottom: 1rem;
        }

        h1 {
            font-weight: 400;
            font-size: 36px;
            @media only screen and (max-width: 375px) {
                font-size: 24px;
            }
        }

        p {
            font-weight: 300;
            font-size: 18px;
            @media only screen and (max-width: 375px) {
                font-size: 14px;
            }
        }

    `;

    const Container = styled.div`
        border: 1px solid #BDBDBD;
        border-radius: 15px;
        width: 850px;
        height: 580px;

        @media only screen and (max-width: 375px) {
            width: 375px;
            border: none;
        }
    `;

    const InfoDiv = styled.div`
        height: 15%;
        line-height: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #BDBDBD;

        @media only screen and (max-width: 375px) {
            justify-content: space-between;
        }

        div{
            margin: 1rem 0rem 0.5rem 5rem;

            @media only screen and (max-width: 375px) {
                margin: 1rem 0rem 0.5rem 1.2rem;
            }
        },

        h2 {
            color: #000000;
            font-weight: 400;

            @media only screen and (max-width: 375px) {
                font-size: 24px;
            }
        }

        p {
            color: #828282;
            @media only screen and (max-width: 375px) {
                font-weight: 500;
                font-size: 13px;
            }
        }

        button {
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            margin: 1rem 5rem 0.5rem 0rem;
            height: 2.2rem;
            width: 7rem;
            border-radius: 10px;
            border: 1px solid #828282;
            color: #828282;
            background-color: #FFFFFF;

            @media only screen and (max-width: 375px) {
                margin: 1rem 1.5rem 0.5rem 0rem;
            }
            
            &:hover {
                background-color: #d3d3d3;
                color: #878787;
                transition: ease-in-out 0.25s;
            }
        }
    `;

    const TableDiv = styled.div`
        //border: 1px solid #BDBDBD;
        width: ${props => props.width};
        height: 85%;
        display: flex;
        flex-direction: column;
        align-items: space-between;
        //padding: 0.5rem 1.2rem;
    `;

    const TableContainer = styled.div`
        display: flex;
        padding: 0rem 1.2rem;
        height: 6rem;
        border-top: 1px solid #BDBDBD;

        @media only screen and (max-width: 375px) {
            padding: 0rem;
            justify-content: space-between;
            border-top: none;
            border-bottom: 1px solid #BDBDBD;
        }
    `;

    const Description = styled.div`
        color: ${props => props.color};
        text-transform: ${props => props.transform};
        width: ${props => props.width};
        height: 5rem;
        padding-left: 5rem;
        display: flex;
        align-items: center;

        @media only screen and (max-width: 375px) {
            padding: 0 1.2rem;
        }

        p {
            @media only screen and (max-width: 375px) {
                justify-content: flex-end;
            }
        }

        img {
            width: 72px;
            height: 72px;
            border-radius: 10px;

            @media only screen and (max-width: 375px) {
                justify-content: flex-end
        }

        
        
    `;

    return (
        <PersonalContainer>
            <TitleDiv>
                <h1>Personal Info</h1>
                <p>Basic info, like your name and photo</p>
            </TitleDiv>
            <Container>
                <InfoDiv>
                    <div>
                        <h2>Profile</h2>
                        <p>Some info may be visible to other people</p>
                    </div>
                    <button>Edit</button>
                </InfoDiv>
                <TableDiv >
                    <TableContainer>
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'} justify={'start'}><p>Photo</p></Description>
                        <Description width={'70%'}><img src='../../src/img/Inspiración_ Creación.jpg' /></Description>
                    </TableContainer>
                    <TableContainer>
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'} justify={'start'}><p>Name</p></Description>
                        <Description color={'#333333'} transform={'capitalize'} width={'70%'} justify={'end'}><p>Simon Briceno</p></Description>
                    </TableContainer>
                    <TableContainer>
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'} justify={'start'}><p>Bio</p></Description>
                        <Description color={'#333333'} transform={'capitalize'} width={'70%'} justify={'end'}><p>I am a software developer and a big fan of devchallenges...</p></Description>
                    </TableContainer>
                    <TableContainer>
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'} justify={'start'}><p>Phone</p></Description>
                        <Description color={'#333333'} transform={'capitalize'} width={'70%'} justify={'end'}><p>04164587956</p></Description>
                    </TableContainer>
                    <TableContainer>
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'} justify={'start'}><p>Email</p></Description>
                        <Description color={'#333333'} transform={'capitalize'} width={'70%'} justify={'end'}><p>xanthe.neal@gmail.com</p></Description>
                    </TableContainer>
                    <TableContainer>
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'} justify={'start'}><p>Password</p></Description>
                        <Description color={'#333333'} transform={'capitalize'} width={'70%'} justify={'end'}><p>************</p></Description>
                    </TableContainer>
                </TableDiv>
                <Creator />
            </Container>
        </PersonalContainer>
    )
}

export { PersonalInfo }