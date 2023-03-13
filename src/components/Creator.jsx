import React from 'react';
import styled from 'styled-components';

const Creator = () => {

    const CreatorDiv = styled.div`
        width: 100%;
        color: #707070;
        font-size: 12px;
        font-weight: 300;
        display: flex;
        //flex-direction: row;
        justify-content: space-between;
        //align-items: end;
        @media only screen and (max-width: 375px) {
            max-width: 375px;
            margin: 0 auto;
            justify-content: space-around;
        }
    `;

    return (
        <CreatorDiv>
            <p>Created by <span style={{color: '#2F80ED'}}>Simon Briceño</span></p>
            <p >devchallenges.io</p>
        </CreatorDiv>
    )
}

export { Creator }