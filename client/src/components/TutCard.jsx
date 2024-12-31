import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;

`;
const Card = styled.div`
    display: flex;
    padding: 20px;
    margin: 5px;
    width: 75%;
    height: 60vh;
    flex-direction: row;
    justify-content:space-evenly;
    align-items: center;
    @media (max-width: 768px) {
     display: flex;
     flex-direction: column;
    }
    
    
    
`;
const Instruction = styled.div`
    display: flex;
    flex-direction: column;
   

    `;

function TutCard({equipment, instructions, name,gif}) {
  return (
    <Container>
      <Card>
        <div >
        <img src={gif} alt="gif" />
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between', width:'100%'}}>
            <div><h4 style={{color:'orangered'}}>{name}</h4>
            <span style={{fontSize:16,color:'gray'}}>Equipment:<span style={{fontWeight:600}}>{equipment}</span></span>
        </div>

        
       <Instruction>
        <span style={{color:'gray'}}>Instructions:</span>
        <ul>
            {instructions.map((instruction, index) => (
                <li key={index} style={{fontSize:'16px',fontWeight:500,textAlign:'justify'}}>{instruction}</li>
            ))}
        </ul>
        </Instruction>
        </div>
      </Card>
    </Container>
  )
}

export default TutCard;