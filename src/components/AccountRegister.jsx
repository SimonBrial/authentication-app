import React from 'react'
import styled from 'styled-components';

const AccountRegister = () => {

    const BtnSocial = styled.button`
        background: url(${props => props.svgIcon}) no-repeat;
        width: 45px;
        height: 45px;
        cursor: pointer;
        border: 1px solid #FFF;
        margin: 0 0.35rem;
    `;
//background-color: #FFFFFF;

    return (
        <div>
            <h3>or continue with these social profile</h3>
            <BtnSocial svgIcon={'../../src/img/Facebook.svg'} />
            <BtnSocial svgIcon={'../../src/img/Gihub.svg'} />
            <BtnSocial svgIcon={'../../src/img/Google.svg'} />
            <BtnSocial svgIcon={'../../src/img/Twitter.svg'} />
        </div>
    )
}

export { AccountRegister }