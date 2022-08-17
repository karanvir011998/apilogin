import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

function Logout()
{
    const navigate = useNavigate();
    const Nav = styled.div`
    display:flex;
    border-bottom: 1px solid black;
    justify-content: space-between;  
    margin: 0 1em;
    button{
        background:none;
        border:none;
    }
    
    `;
    const Profile = styled.div`
    
    p{
        text-transform: capitalize;
      
          }
    `;
    
    const [data, setdata] = useState("")
    useEffect(() => { 
        const data = JSON.parse(localStorage.getItem("userData"));
        
        console.log(data);
        setdata(data.data)
      }, [])
      const clicked = () =>{

        localStorage.clear();
        navigate("/");
      }
    return(
        <div className="container">
            <Nav className="navbar">
            <button>Profile</button>
            <p>Welcome {
                 data.firstName} {data.lastName}</p> 
            <button onClick={clicked}>Logout</button> 
            </Nav>
            <Profile className="profile">
                <p>Name : {data.firstName} {data.lastName}</p>
                <p>Email : {data.email}</p>
                <p>Number : {data.phone}</p>
                <p>State : {data.state}</p>
                <p>City : {data.city}</p>
                <p></p>
            </Profile>
        </div>
    )
}
export default Logout;
