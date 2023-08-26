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
import { useState } from 'react';
import{Link as LinkRouter,useLocation} from 'react-router-dom';
import axios from 'axios';
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
export default function Reviews({reviewCount,setReviewCount,modList,setModList}) {
  const location=useLocation();
  const course=location.state;
  const [name,setName]=useState('');
  const [prof,setProf]=useState('');
  const [year,setYear]=useState('');
  const [workload,setWorkload]=useState('');
  const [grading,setGrading]=useState('');
  const [difficulty,setDifficulty]=useState('');
  const [teaching,setTeaching]=useState('');
  const [satisfaction,setSatisfaction]=useState('');
  
  /* The below 7 functions are for handling the input provided
  by the user. We are storing the input provided by user in
  the states we declared in App.js and passed as props  */
  function handleName(event) {setName(event.target.value);}
  function handleProf(event){setProf(event.target.value);}
  function handleYearnSem(event){setYear(event.target.value);}
  function handleGrading(event){setGrading(event.target.value);}
  function handleWorkload(event){setWorkload(event.target.value);}
  function handleDifficulty(event){setDifficulty(event.target.value);}
  function handleTeaching(event){setTeaching(event.target.value);}
  function handleSatisfaction(event){setSatisfaction(event.target.value);}
  
  function AddReview(){
    const review={
      "key":course.key,
      "ID":reviewCount+1,
      "Student":name,  
      "Prof":prof,
      "Year_and_Semester": year,
      "Grading_Pattern":grading,
      "WorkLoad":workload,
      "Difficulty":difficulty,
      "Teaching_Style":teaching,
      "Satisfaction":satisfaction
    }
    console.log(review);
    async function postReview(){
      try {
        const response = await axios.post('http://localhost:3000/submitReview', review);
        console.log('Response:', response.data);
        // Handle successful response
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    }
    postReview();
    window.alert("Sent for Approval from Moderators!");
    //   //setting the states to empty fields after adding a review
    setName(''); setProf(''); setYear(''); setGrading(''); setDifficulty(''); setWorkload(''); setTeaching(''); setSatisfaction('');
    const newReviewCount=reviewCount+1;
    setReviewCount(newReviewCount);
    window.location.reload();
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
              {course.name}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              {course.description}
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
            {/* {creating a map for all the elements in the MTH111/112 reviews list,
             to fetch all the approved reviews} */}
            {course.reviews.map((review) => (
              <Grid item key={review.ID} xs={12} sm={6} md={16}>
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
          <div maxWidth={16} style= {{display:"flex", justifyContent:"center",flexDirection:"column"}}>
            <input  value={name} onChange={handleName}className="form" id="Name" placeholder='Name'></input>
            <input value={prof} onChange={handleProf} className="form" id="Prof" placeholder='Instructor'></input>
            <input value={year} onChange={handleYearnSem} className="form" id="Prof" placeholder='Year and Semester'></input>
            <input value={workload}onChange={handleWorkload} className="form" id="Workload" placeholder='Workload Description'></input>
            <input value={difficulty} onChange={handleDifficulty} className="form" id="Difficulty" placeholder='Difficulty Level'></input>
            <input value={grading} onChange={handleGrading} className="form" id="Grading" placeholder='Grading Pattern'></input>
            <input value={teaching} onChange={handleTeaching} className="form" id="Teaching_style" placeholder='Teaching Style of Instructor'></input>
            <input value={satisfaction}onChange={handleSatisfaction} className="form" id="Satisfaction" placeholder='Overall Satisfaction'></input>
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