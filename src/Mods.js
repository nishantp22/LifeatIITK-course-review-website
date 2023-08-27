import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import{Link as LinkRouter} from 'react-router-dom';
import axios from 'axios';
//We are using a template from MUI so importing the necessities.

function Copyright() {    //a copyright function for footer, directly from MUI template
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
export default function Mods({modList,setModList,data,setCourses}) {
// the arguments in the function Mods are the various props that we are accepting.
  
async function approveReview(review){ 
  // const response=await axios
  try {
    const response1 = await axios.post(`https://lifeatiitk.onrender.com/approveReview`,review);
    console.log(response1.data);
    const response2 = await axios.delete(`https://lifeatiitk.onrender.com/rejectReview?ID=${review._id}`);
    console.log(response2.data);
    window.location.reload(); // This can be improved by updating the state instead of a full page reload
    window.alert("Approved Sucessfully!");
  } catch (error) {
    console.error("Error approving review:", error);
  }
                  
}
async function rejectReview(review){
  try {
    const response = await axios.delete(`https://lifeatiitk.onrender.com/rejectReview?ID=${review._id}`);
    console.log(response.data);
    window.alert("Rejected Successfully!");
    window.location.reload(); // This can be improved by updating the state instead of a full page reload
  } catch (error) {
    console.error("Error rejecting review:", error);
  }
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
              Approve/Reject Reviews
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              What kind of POR is this?
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
            {/* {creating a map for all the elements in the moderator list, to fetch all the reviews} */}
            {modList.map((review) => (  
              <Grid item key={review.ID} xs={12} sm={6} md={16}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
                      <b>Workload Description : </b>{review.Workload}
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
                  {/* {two buttons, one for accepting, one for rejecting} */}
                <Button size="small" onClick={()=>approveReview(review)} style={{textDecoration:'none',color:'black'}}>Approve Review</Button>
                <Button size="small" onClick={()=>rejectReview(review)}style={{textDecoration:'none',color:'black'}}>Reject Review</Button>
                </Card>
              </Grid>
            ))}
          </Grid>
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