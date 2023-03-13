import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const DropItem = ({ icon, text, color, padding, display, border }) => {

    const DropItemContainer = styled.div`
    //border: 1px solid #E0E0E0;
        padding: ${props => props.padding};
        width: 12rem;
        display: ${props => props.display};

        @media only screen and (max-width: 375px) {
            display: ${props => (props.display = 'none') ? 'block' : 'none'};
            border-bottom: ${props => props.border ? props.border : '0'};
        }
    `;

    const DropDiv = styled.div`
        width: 12rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        color: ${props => props.color};
        border-radius: 10px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;

        .iconDrop {
            margin: 0 0.5rem 0 1rem;
            color: ${props => props.color};
        }

        :hover {
            background-color: #F2F2F2;
            transition: ease-in-out 0.25s;
        }
    `;

    return (
        <DropItemContainer padding={padding} display={display} border={border}>
            <DropDiv color={color}>
                <FontAwesomeIcon icon={icon} className='iconDrop' />
                <p>{text}</p>
            </DropDiv>
        </DropItemContainer>
    )
}

export { DropItem }