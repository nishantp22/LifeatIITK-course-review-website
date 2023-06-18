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

let courses=[
    { 
        Name:"MTH111/112",
        Image:require('./img/MTH111112.jpg'),
        Description:"Single and Multivariable Calculus",
        Link:"/MTH111_112"
      },
      {
        Name:"MTH113/114",
        Image:require('./img/MTH113114.jpg'),
        Description:"Linear Algebra and Ordinary Differential Equations",
        Link:"/MTH113_114"
      },
      {
        Name:"ESC111/112",
        Image:require('./img/ESC111112.jpg'),
        Description:"Fundamentals Of Computing",
        Link:"/ESC111_112"
      },
      {
        Name:"TA111",
        Image:require('./img/TA111.jpg'),
        Description:"Engineering Graphics",
        Link:"/TA111"
      },
      {
        Name:"PHY114",
        Image:require('./img/PHY114.jpg'),
        Description:"Quantum Physics",
        Link:"/PHY114"
      },
      {
        Name:"CHM112/113",
        Image:require('./img/CHM111112.jpg'),
        Description:"General Chemisty",
        Link:"/CHM112_113"
    }
];

const defaultTheme = createTheme();

export default function Home() {
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
            {courses.map((course) => (
              <Grid item key={course} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={course.Image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography style={{display:'flex',justifyContent:'center'}}gutterBottom variant="h5" component="h2">
                      {course.Name}
                    </Typography>
                    <Typography style={{display:'flex',justifyContent:'center'}}>
                      {course.Description}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ display: 'flex', justifyContent: 'center', textDecoration:'none' }}>
                    <Button size="small"><LinkRouter style={{textDecoration:'none',color:'black'}} to={course.Link}>View Reviews</LinkRouter></Button>
                    {/* <Button size="small">Add Review</Button> */}
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