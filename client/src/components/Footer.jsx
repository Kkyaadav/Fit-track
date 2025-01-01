import React from 'react'
import styled from 'styled-components';
import LogoImg from '../utils/images/Logo.png';
const Container = styled.div`
    width: 100%;
    height: 70px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;

`;
const Logo = styled.img`
  height: 47px;
  
`;
function Footer() {
  return (
    <Container>
        <Logo src={LogoImg} />
        <h3>Fittrack </h3>
        <span >©️2024</span>

    </Container>
  )
}

export default Footer