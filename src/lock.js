import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//importing useNavigate hook as we want to route to a different page after logging in 
import{useNavigate,Link as LinkRouter} from 'react-router-dom';
//We are using a template from MUI so importing the necessities.


function Copyright() {//a copyright function for footer, directly from MUI template
    return (
        <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/nishant-pandey-6b7196247/">
        Nishant Pandey
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme();

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
        if(name==="futuresecy"&&pass==="pclubsecy"){
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
        <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* {link for homepage} */}
        <LinkRouter  style={{textDecoration:'none',color:'white',fontSize:'20px'}} to="/">Home</LinkRouter>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Please Login to Continue
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              No Rush.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >   
            </Stack>
          </Container>
        </Box>
        <Container style={{marginBottom:'20px'}} maxWidth="xs">
          {/* {this container contains fields for username and password and a login button,
          with the desired event handling assigned} */}
            <div style={{ display:'flex', justifyContent:'center',flexDirection:'column'}} maxWidth={16}>
            <input value={name} className="form" id="Name" onChange={handleName} placeholder='Username'></input>
            <input value={pass} type="password"className="form" id="Name" onChange={handlePass} placeholder='Password'></input>
            <button onClick={validate}>Login</button>
            </div>
        </Container>
      </main>
      {/* {footer} */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
            Thanks :)
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Thanks again :)
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}