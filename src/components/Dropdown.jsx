import React, { useState } from 'react';
import styled from 'styled-components';
import { DropItem } from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCircleUser, faUsers, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {

    const [open, setOpen] = useState(false)

    const DropToggleContainer = styled.div`
        position: absolute;
        width: 14rem;
        margin-left: -2rem;
        border: 1px solid #E0E0E0;
        background-color: #FFFFFF;
        border-radius: 10px;
        margin-top: 0.5rem;
        z-index: 10;
        box-shadow: 7px 10px 12px -6px rgba(0, 0, 0, 0.17);
        opacity: ${props => props.opacity};
        visibility: ${props => props.visibility};
        transform: translateY(-10px);
        transition: all 1s ease-in-out;
        `;

    const DropContainer = styled.div`
        position: relative;
        width: 13rem;
        height: 4rem;
        padding: 0.5rem;
        display: flex;
        flex-direction: ${props => props.direction};
        justify-content: space-between;
        align-items: center;


        img {
            width: 50px;
            height: 50px;
            border-radius: 5px;
        }
        
        p {
            font-weight: 700;
            font-size: 16px;
        }

        .icon {
            width: 25px;
            height: 25px;
            cursor: pointer;
        }
    `;

    return (
        <div>
            <DropContainer direction={'row'}>
                <img src='../../src/img/Inspiración_ Creación.jpg' />
                <p>Simon Briceno</p>
                <FontAwesomeIcon icon={faCaretDown} className='icon'  onClick={() => setOpen(!open)}/>
            </DropContainer>
            <DropToggleContainer opacity={open ? '1' : '0'} visibility={open ? 'visibility' : 'hidden'}>
                <DropItem icon={faCircleUser} text={'My Profile'} color={'#4F4F4F'} padding={'1rem 1rem 0.5rem 1rem'}/>
                <DropItem icon={faUsers} text={'Group Chat'} color={'#4F4F4F'} padding={'0.5rem 1rem 0.5rem 1rem'}/>
                <DropItem icon={faArrowRightFromBracket} text={'Logout'} color={'#EB5757'} padding={'0.5rem 1rem 1rem 1rem'}/>
            </DropToggleContainer>
        </div>
    )
}

export { Dropdown }