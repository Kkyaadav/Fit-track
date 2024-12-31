import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { toast,ToastContainer } from 'react-toastify';
const Container = styled.div`
 display:flex;
 flex-direction:column;
    justify-content:center;
    align-items:center;

`;
const Span=styled.span`
  
    font-weight:bold;
    `;

const Card=styled.div`
    display:flex;
    flex-direction:column;
   justify-content:center;
    align-items:center;
    border:1px solid #ccc;
    border-radius:10px;
    height:50vh;
    width:25vw;
    padding:1rem;


`;


function UserProfile() {
    const { currentUser } = useSelector((state) => state.user);
  
  return (
    <Container>
        <h2>User Profile</h2>
        <ToastContainer/>
        <Card>
            <div style={{display:'flex',flexDirection:'row', alignItems:'flex-end'}}>
            <Avatar style={{height:'20vh', width:'9vw'}} src={currentUser?.img}/>
            <Edit style={{border:'1px solid gray',borderRadius:'50%',padding:'2px',height:'15px',width:'15px'}}
                onClick={()=>{
                  toast.success('Edit feature coming soon')
                }}
            />
            </div>
            <p>Username : <Span>{currentUser?.name}</Span> </p>
            <p>Email : <Span>{currentUser?.email}</Span></p>
            <p>Joined on : {currentUser.createdAt.substring(0,10)}</p>
        </Card>
    </Container>
  )
}

export default UserProfile