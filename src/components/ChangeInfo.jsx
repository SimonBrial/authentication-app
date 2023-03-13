import React from 'react';
import styled from 'styled-components';
import { Creator } from './index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faCamera } from '@fortawesome/free-solid-svg-icons';

const ChangeInfo = () => {
    const Container = styled.div`
        border: 1px solid #E0E0E0;
        border-radius: 10px;
        width: 850px;
        padding: 3rem;

        @media only screen and (max-width: 375px) {
            border: none;
            max-width: 375px;
            display: flex;
            flex-direction: column;
            padding-bottom: 1rem;
            padding-top: 1rem;
        }
    `;

    const BtnBack = styled.button`
        border: 1px solid #FFF;
        background-color: #FFF;
        margin-left: -10px;
        color: #2D9CDB;
        display: flex;
        align-items: center;
        padding: 0.8rem 1rem;
        margin-bottom: 0.5rem;
        cursor: pointer;

        span {
            margin-left: 0.5rem;
            font-weight: 400;
            font-size: 18px;
        }

        :hover {
            color: #248bc7;
            font-size: 18px;
            transition: all 0.25s ease-in-out;
        }

        @media only screen and (max-width: 375px) {
            margin-left: 4rem;
        }
    `;

    const ChangeTitle = styled.div`
        margin-top: -1.5rem;
        line-height: 0.8rem;

        h1 {
            font-size: 24px;
            font-weight: 400;
        }

        p {
            color: #828282;
            font-weight: 500;
            font-size: 13px;
        }

        @media only screen and (max-width: 375px) {
            text-align: center;
            padding-bottom: 1rem;
        }
    `;

    const ChangeInfoContainer = styled.div`
        width: 60%;

        @media only screen and (max-width: 375px) {
            width: 100%;
        }
    `;

    const InputChanged = styled.div`
        margin: 1rem 0;
        display: flex;
        flex-direction: column;

        @media only screen and (max-width: 375px) {
            width: 310px;
            padding: 0 1rem;
        }

        label {
            font-size: 13px;
            font-weight: 500;
            margin-bottom: 0.5rem
        }

        img {
            width: 80px;
            height: 80px;
            border-radius: 8px;
            cursor: pointer;
        }

        input {
            border: 1px solid #828282;
            border-radius: 8px;
            padding: 0.5rem 1rem;
            width: 100%;
            &::placeholder {
                color: #BDBDBD;
            }
            &:focus {
                outline: none;
            }
        }

        textarea {
            width: 100%;
            border: 1px solid #828282;
            border-radius: 8px;
            padding: 0.5rem 1rem;
            &::placeholder {
                color: #BDBDBD;
            }
            &:focus {
                outline: none;
            }
        }
    `;

    const InputChangedImg = styled(InputChanged)`
        flex-direction: row;
        align-items: center;
        position: relative;

        @media only screen and (max-width: 375px) {
            width: 80%;
            padding: 0 1rem;
            justify-content: space-between;
        }

        p {
            color: #828282;
            font-weight: 500;
            font-size: 13px;
            margin-left: 2rem;
            cursor: pointer;

            @media only screen and (max-width: 375px) {
                margin-right: -2rem;
            }
        }

        .iconCamera {
            z-index: 10;
            width: 30px;
            height: 25px;
            margin: 0 1.6rem;
            color: #FFFFFF;
            position: absolute;
            display: flex;
            justify-content: center;
            cursor: pointer;
        }
    `;

    const BtnChange = styled(InputChanged)`
        color: #FFFFFF;
        font-weight: 500;
        font-size: 16px;
        width: 4rem;
        margin-top: 2rem;
        margin-bottom: 0rem;
        text-align: center;
        padding: 0.8rem 1.2rem;
        border-radius: 10px;
        background-color: #2F80ED;
        cursor: pointer;
        &:hover {
            background-color: #1f69ca;
            transition: all 0.25s ease-in-out;
        }

        @media only screen and (max-width: 375px) {
            width: 310px;
            margin: 0 auto;
        }
    `;

    return (
        <div>
            <BtnBack>
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>Back</span>
            </BtnBack>
            <Container>
                <ChangeInfoContainer>
                    <ChangeTitle>
                        <h1>Change Info</h1>
                        <p>Changes will be reflected to every services</p>
                    </ChangeTitle>
                    <InputChangedImg>
                        <FontAwesomeIcon icon={faCamera} className='iconCamera' />
                        <img src='../../src/img/Inspiración_ Creación.jpg' />
                        <p>CHANGE PHOTO</p>
                    </InputChangedImg>
                    <InputChanged>
                        <label>Name</label>
                        <input type='text' placeholder='Enter your name...' />
                    </InputChanged>
                    <InputChanged>
                        <label>Bio</label>
                        <textarea rows="5" cols="50" placeholder='Enter your bio...' />
                    </InputChanged>
                    <InputChanged>
                        <label>Phone</label>
                        <input type='tel' placeholder='Enter your phone...' />
                    </InputChanged>
                    <InputChanged>
                        <label>Email</label>
                        <input type='email' placeholder='Enter your email...' />
                    </InputChanged>
                    <InputChanged>
                        <label>Password</label>
                        <input type='password' placeholder='Enter your password...' />
                    </InputChanged>
                    <BtnChange>Save</BtnChange>
                </ChangeInfoContainer>
            </Container>
            <Creator />
        </div>
    )
}

export { ChangeInfo }