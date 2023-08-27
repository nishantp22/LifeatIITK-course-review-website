import * as React from 'react';
import Footer from './Footer';
import { useState } from 'react';
import Navbar from './Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//importing useNavigate hook as we want to route to a different page after logging in 
import{useNavigate,Link as LinkRouter} from 'react-router-dom';

export default function Lock() {
    const navigate = useNavigate(); //for using useNavigate hook 
    //these are the two states where we will store the username and password input by user  
    const [name,setName]=useState(''); 
    const [pass,setPass]=useState('');
    
    /*the below two functions will change the value stored
    in username and password, each time the input is changed,
    basically they are storing the input given in
    username and password field*/
    function handleName(event){
        setName(event.target.value);
    }
    function handlePass(event){
        setPass(event.target.value);
    }
    const validate=()=>{  //function to validate username and pass
        if(name==="pclubsecy"&&pass==="pclubsecy"){
          //if username and password are correct, route to Mods page  
          navigate('/Mods');
        }
        else{
          //else give an error
            window.alert("Incorrect Username/Password!");
            setName('');  //setting the fields to blank for another try
            setPass('');
        }
    }
    return (
      /*here some of the code is provided by the MUI template,*/
      <main>
        <Navbar></Navbar>
      <div class="PageHeading">
              <p>Please Login To Continue</p>
              <p id="smallHeading">No Rush</p>
            </div>  
          {/* {this container contains fields for username and password and a login button,
          with the desired event handling assigned} */}
          <div>
            <form class="lock">
            <input value={name} class="form" id="lockname" onChange={handleName} placeholder='Username'></input>
            <input value={pass} type="password"class="form" id="lockpass" onChange={handlePass} placeholder='Password'></input>
            <button type="submit" class="btn btn-primary" id="lock-btn" onClick={validate}>Login</button>
            </form>
          </div>
          <Footer/>
      </main>
  );
}