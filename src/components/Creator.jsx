import React from 'react';
import styled from 'styled-components';

const Creator = () => {

    const CreatorDiv = styled.div`
        color: #707070;
        font-size: 12px;
        font-weight: 300;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `;

    return (
        <CreatorDiv>
            <p>Created by <span style={{color: '#2F80ED'}}>Simon Briceño</span></p>
            <p style={{marginLeft: '8rem'}}>devchallenges.io</p>
        </CreatorDiv>
    )
}

export { Creator }