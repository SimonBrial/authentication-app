import React from 'react'
import styled from 'styled-components'
import { Dropdown } from './index';

const Header = () => {
    const Header = styled.header`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: 375px) {
            width: 375px;
            padding: 0 2rem;
            justify-content: center;
            
        }

        span {
            //margin-left: -7rem;
            @media only screen and (max-width: 375px) {
                width: 375px;
                margin-left: 2.5rem;
            }
        }

        div {
            margin-right: -1rem;
        }

    `;

    return (
        <Header>
            <span><img src='../../src/img/devchallenges.svg'/></span>
            <div>
                <Dropdown/>
            </div>
        </Header>
    )
}

export { Header }