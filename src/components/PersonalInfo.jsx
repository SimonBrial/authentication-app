import React from 'react'
import styled from 'styled-components'

const PersonalInfo = () => {

    const TitleDiv = styled.div`
        text-align: center;
        line-height: 5px;
        //padding-bottom: 1.5rem;

        /* h1 {
            font-weight: 400;
            font-size: 36px;
        }

        p {
            font-weight: 300;
            font-size: 18px;
        } */

    `;

    const Container = styled.div`
        border: 1px solid #BDBDBD;
        border-radius: 15px;
        width: 850px;
        height: 580px;
    `;

    const InfoDiv = styled.div`
        height: 15%;
        line-height: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #BDBDBD;

        div{
            margin: 1rem 0rem 0.5rem 5rem;
        },

        h2 {
            color: #000000;
            font-weight: 400;
        }

        p {
            color: #828282;
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
            
            :hover {
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
    `;

    const Description = styled.div`
        color: ${props => props.color};
        text-transform: ${props => props.transform};
        width: ${props => props.width};
        height: 5rem;
        padding-left: 5rem;
        display: flex;
        align-items: center;
        height: ;
    `;

    /* const ImgDiv = styled.img`
        background-image: url(${props => props.backgroundImage});
        width: 80px;
        height: 90px;
    `; */

    /* <div>
        <ImgDiv backgroundImage={'../../src/img/Inspiración_ Creación.jpg'} />
    </div> */

    return (
        <div>
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
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'}><p>Photo</p></Description>
                        <Description width={'70%'}><img src='../../src/img/Inspiración_ Creación.jpg' style={{ width: '60px', height: '60px' }} /></Description>
                    </TableContainer>
                    <TableContainer>
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'}><p>Name</p></Description>
                        <Description color={'#333333'} transform={'capitalize'} width={'70%'}><p>Simon Briceno</p></Description>
                    </TableContainer>
                    <TableContainer>
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'}><p>Bio</p></Description>
                        <Description color={'#333333'} transform={'capitalize'} width={'70%'}><p>I am a software developer and a big fan of devchallenges...</p></Description>
                    </TableContainer>
                    <TableContainer>
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'}><p>Phone</p></Description>
                        <Description color={'#333333'} transform={'capitalize'} width={'70%'}><p>04164587956</p></Description>
                    </TableContainer>
                    <TableContainer>
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'}><p>Email</p></Description>
                        <Description color={'#333333'} transform={'capitalize'} width={'70%'}><p>xanthe.neal@gmail.com</p></Description>
                    </TableContainer>
                    <TableContainer>
                        <Description color={'#BDBDBD'} transform={'uppercase'} width={'30%'}><p>Password</p></Description>
                        <Description color={'#333333'} transform={'capitalize'} width={'70%'}><p>************</p></Description>
                    </TableContainer>
                </TableDiv>
            </Container>
        </div>
    )
}

export { PersonalInfo }