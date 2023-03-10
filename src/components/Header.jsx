import React from 'react'
import styled from 'styled-components'
import { Dropdown } from './index';

const Header = () => {
    const Header = styled.header`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
            margin-left: -7rem;
        }

        div {
            margin-right: -2rem;
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