import './App.css';
import { Fade, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

export default function App() {
  return <>
    <Fade in={true}>
      <Container>
        <TarjetaTerminal text={"Hello, I'm XSS"} />
        <TarjetaTerminal text={"Hello, I'm XSS"} />
        <TypeAnimation
          strings={[
            "I'm a Full Stack Developer",
            "I Love Software Development",
            "I Love All My Subscribers",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop /> 
      </Container>
    </Fade>
  </>
}

function TarjetaTerminal(props) {
  return <>
    <Grid paddingTop={5}>
      <Paper elevation={10}>
        <Stack p={3}>
          <Typography variant={'h4'} fontFamily={'Consolas'} color={'red'}>
            ┌──(root💀portfolio)-[~]
          </Typography>
          <Typography variant={'h4'} fontFamily={'Consolas'} color={'red'}>
            └─# {props.text}
          </Typography>

        </Stack>
      </Paper >
    </Grid>
  </>
}
