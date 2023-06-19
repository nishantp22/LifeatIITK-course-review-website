import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import{Link as LinkRouter} from 'react-router-dom';
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
export default function TA111({count,setCount,reviews,Name,Prof,YearnSem,Difficulty,Grading,Satisfaction,Teaching,
  Workload,setDifficulty,setName,setProf,setYearnSem,setGrading,setWorkload,setSatisfaction,setTeaching,modList,setModList}) {
  // the arguments in the function TA111 are the various props that we are accepting.
  
  /* The below 7 functions are for handling the input provided
  by the user. We are storing the input provided by user in
  the states we declared in App.js and passed as props  */
  
  function handleName(event){
    setName(event.target.value);
  }
  function handleProf(event){
    setProf(event.target.value);
  }
  function handleYearnSem(event){
    setYearnSem(event.target.value);
  }
  function handleGrading(event){
    setGrading(event.target.value);
  }
  function handleWorkload(event){
    setWorkload(event.target.value);
  }
  function handleDifficulty(event){
    setDifficulty(event.target.value);
  }
  function handleTeaching(event){
    setTeaching(event.target.value);
  }
  function handleSatisfaction(event){
    setSatisfaction(event.target.value);
  }

  /* The function AddReview will add a review in the 
  moderator list and give an alert, that the review has been
  sent to moderators for moderation */
  function AddReview(){
    /*We are creating a new review and assigning all the
    parameters accorting to the current values stored in the
    states(this function is called when the user clicls the 
      button add review) */
    setModList(()=>{
      return [...modList,{
          key:count,
          ID:4,
          Student:Name,
          Prof:Prof,
          Grading_Pattern:Grading,
          WorkLoad:Workload,
          Difficulty:Difficulty,
          Teaching_Style:Teaching,
          Satisfaction:Satisfaction,
        }
      ]
    })
    //setting the states to empty fields after adding a review
    setName('');
    setProf('');
    setYearnSem('');
    setGrading('');
    setDifficulty('');
    setWorkload('');
    setTeaching('');
    setSatisfaction('');
    setCount(count+1);
    window.alert("Sent for Approval from Moderators!");
  }
  
  return (
    //here some of the code is provided by the MUI template
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
              TA111
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Somebody tell these folks about AutoCad.
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
        <Container sx={{ py: 8 }}>
          <Grid container spacing={4}>
            {/* {creating a map for all the elements in the TA111 reviews list,
             to fetch all the approved reviews} */}            
            {reviews.map((review) => (
              <Grid item key={review.key} xs={12} sm={6} md={16}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography>  
                      <b>Review By : </b>{review.Student}
                    </Typography>
                    <Typography>
                      <b>Instructor : </b>{review.Prof}
                    </Typography>
                    <Typography>
                      <b>Year and Semester : </b>{review.Year_and_Semester}
                    </Typography>
                    <Typography>
                      <b>Workload Description : </b>{review.WorkLoad}
                    </Typography>
                    <Typography>
                      <b>Difficulty Level : </b>{review.Difficulty}
                    </Typography>
                    <Typography>
                      <b>Grading Pattern : </b>{review.Grading_Pattern}
                    </Typography>
                    <Typography>
                      <b>Teaching Style of Instructor : </b>{review.Teaching_Style}
                    </Typography>
                    <Typography>
                      <b>Overall Satisfaction : </b>{review.Satisfaction}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Typography variant='h5' style={{marginTop:'40px', display:'flex', justifyContent:'center'}}>
            Add A Review
          </Typography>
          {/* {below div is a form where user can add a review.
          It has various fields and an add review button.
          These entities, when changed(or clicked), will call
          respecive functions} */}          
          <div style={{ display:'flex', justifyContent:'center',flexDirection:'column'}} maxWidth={16}>
            <input value={Name} onChange={handleName}className="form" id="Name" placeholder='Name'></input>
            <input value={Prof} onChange={handleProf} className="form" id="Prof" placeholder='Instructor'></input>
            <input value={YearnSem} onChange={handleYearnSem} className="form" id="Prof" placeholder='Year and Semester'></input>
            <input value={Workload}onChange={handleWorkload} className="form" id="Workload" placeholder='Workload Description'></input>
            <input value={Difficulty} onChange={handleDifficulty} className="form" id="Difficulty" placeholder='Difficulty Level'></input>
            <input value={Grading} onChange={handleGrading} className="form" id="Grading" placeholder='Grading Pattern'></input>
            <input value={Teaching} onChange={handleTeaching} className="form" id="Teaching_style" placeholder='Teaching Style of Instructor'></input>
            <input value={Satisfaction}onChange={handleSatisfaction} className="form" id="Satisfaction" placeholder='Overall Satisfaction'></input>
            <button onClick={AddReview}>Add Review</button>
          </div>
        </Container>
      </main>
      {/* Footer */}
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