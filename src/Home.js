import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import{useNavigate,Link as LinkRouter} from 'react-router-dom';
//We are using an MUI template, hence importing the necessary requirements

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

/* Below is an array containing information for cards fo various courses*/

const defaultTheme = createTheme();

export default function Home(data) {
  const courses=data.data;
  const navigate=useNavigate();
  function transfer(id){
    navigate('/Reviews',{state:courses[id-1]});
    window.scrollTo(0, 0);
  }
  //here some code is provided by the MUI template
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* {links for homepage and moderator page} */}
        <LinkRouter  style={{textDecoration:'none',color:'white',fontSize:'20px'}} to="/">Home</LinkRouter>
        <LinkRouter  style={{textDecoration:'none',color:'white',fontSize:'20px',marginLeft:'20px'}} to="/lock">For Moderators</LinkRouter>
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
              Life@IITK
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Don't forget the 1 while chasing 0s.
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
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
             {/* {creating a map for all the courses,
             these courses will be displayed, along with an option to view all the reviews} */}
            {courses.map((course) => (
              <Grid item key={course.key} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={course.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography style={{display:'flex',justifyContent:'center'}}gutterBottom variant="h5" component="h2">
                      {course.name}
                    </Typography>
                    <Typography style={{textAlign:'center'}}>
                      {course.title}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ display: 'flex', justifyContent: 'center', textDecoration:'none' }}>
                    <Button onClick={()=>transfer(course.key)} id={course.key} size="small" style={{textDecoration:'none',color:'black'}}>View Reviews</Button>
                  </CardActions>
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