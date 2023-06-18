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
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import{Outlet, Link as LinkRouter} from 'react-router-dom';

function Copyright() {
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
export default function MTH111_112() {
  let reviewNo=1;
  let [reviews,setReviews] =useState([{
    ID:1,
    Student:'Nishant Pandey',
    Prof:'Nisheeth Srivastava/ Anil Seth',
    Year_and_Semester : '2022-23 1st sem',
    Grading_Pattern:'B-C centric. 18 got an A* and 59 got an A in 112.',
    WorkLoad:'Weekly quizzes, one midsem and one endsem',
    Difficulty:'Moderate. But requires regular practice',
    Teaching_Style:'Both of them are decent',
    Satisfaction: 'Satisfied'
  }]);
  const [Name,setName]=useState('');
  const [Prof,setProf]=useState('');
  const [YearnSem,setYearnSem]=useState('');
  const [Grading,setGrading]=useState('');
  const [Workload,setWorkload]=useState('');
  const [Difficulty,setDifficulty]=useState('');
  const [Teaching,setTeaching]=useState('');
  const [Satisfaction,setSatisfaction]=useState('');
  
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
  function AddReview(){
    setReviews(()=>{
      return [...reviews,{
          ID:reviewNo,
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
    setName('');
    setProf('');
    setYearnSem('');
    setGrading('');
    setDifficulty('');
    setWorkload('');
    setTeaching('');
    setSatisfaction('');
  }
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
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
              ESC111/112
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              The single most useful 1st year course.
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
            {reviews.map((review) => (
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