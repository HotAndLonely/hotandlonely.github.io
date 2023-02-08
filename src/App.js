import './App.css';
import { Fade, Container, Grid, Paper, Stack, Typography, Tooltip, ButtonGroup, Button, FormControl, InputLabel, Select, MenuItem, Autocomplete, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { Box } from '@mui/system';
import Draggable from 'react-draggable';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {

  const options = [
    { title: 'Github', link: 'https://github.com/HotAndLonely' },
    { title: 'Discord', link: 'xenon#1272' },
    { title: 'Email', link: 'akaxenonxss@gmail.com' }
  ]

  return <>
    <ThemeProvider theme={darkTheme}>
      <Fade in={true}>
        <Container>
          <Draggable>
            <Grid border={1} borderColor={'skyblue'} borderRadius={1}>
              <Grid borderBottom={2} borderColor={'skyblue'} align={'right'}>
                <Paper width={'100%'}>
                  <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
                    <GetClientIp></GetClientIp>
                    <Stack direction={'row'}>
                      <MinimizeIcon color='primary' />
                      <CloseIcon color='primary' />
                    </Stack>
                  </Stack>
                </Paper>
              </Grid>
              <Paper elevation={16}>
                <Stack direction={'row'}>
                  <Stack direction={'column'}>
                    <TarjetaTerminal words={['display', 'info']} typingWords={["Hello, I'm XSS", "Welcome to my website"]} />
                    <TarjetaTerminal words={[
                      'open',
                      <Autocomplete
                        options={options}
                        getOptionLabel={(option) => option.title}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField  className='autocompleteStyle' variant='standard' {...params} />}
                        />]}
                      typingWords={""}></TarjetaTerminal>
                  </Stack>
                  <Stack textAlign={'right'} margin='auto' overflow={'hidden'}>
                    <Tooltip title={'Github 👀'}>
                      <img Id='profilepic' onClick={() => { window.open('https://github.com/HotAndLonely', '_blank').focus() }} style={{ 'border-radius': '0%', 'margin': '20px' }} width={450} src={"asciipic.png"} alt={"profile pic"} />
                    </Tooltip>
                  </Stack>
                </Stack>

              </Paper >
            </Grid>
          </Draggable>
        </Container>
      </Fade>
    </ThemeProvider>
  </>
}

function TarjetaTerminal(props) {
  return <>
    <Box paddingTop={5} paddingLeft={5}>
      <Typography display={"inline"} fontFamily={'Consolas'} variant={'h5'} color={'skyblue'}>┌──(</Typography>
      <Typography display={"inline"} fontFamily={'Consolas'} variant={'h5'} color={'#ff6363'}>root💀hotandlonely</Typography>
      <Typography display={"inline"} fontFamily={'Consolas'} variant={'h5'} color={'skyblue'}>-[</Typography>
      <Typography display={"inline"} fontFamily={'Consolas'} variant={'h5'} color={'#f5f5f5'}>~</Typography>
      <Typography display={"inline"} fontFamily={'Consolas'} variant={'h5'} color={'skyblue'}>]</Typography>
      <br></br>
      <Stack direction={'row'} spacing={3}>
        <Typography display={"inline"} fontFamily={'Consolas'} variant={'h5'} color={'skyblue'}>└─#</Typography>
        <Typography display={"inline"} fontFamily={'Consolas'} variant={'h5'} color={'#deff69'}> {props.words[0]}</Typography>
        <Typography display={"inline"} fontFamily={'Consolas'} variant={'h5'} color={'#f5f5f5'}> {props.words[1]}</Typography>
      </Stack>

      <Typography display={"inline"} fontFamily={'Consolas'} variant={'h5'} color={'#f5f5f5'}><TypingText typingWords={props.typingWords} display={"inline"}></TypingText> </Typography>
    </Box>

  </>
}

const TypingText = (props) => {
  return (
    <TypeAnimation
      sequence={[
        props.typingWords[0],
        4000, // Waits 2s
        props.typingWords[1],
        () => {
          console.log('[i]Typing animation loaded...'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontFamily: 'Consolas' }}
    />
  );
};

class GetClientIp extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ip: '',
      location: '',
    }
  }

  async componentDidMount() {
    const res = await axios.get('https://geolocation-db.com/json/')
    this.setState({
      ip: res.data.IPv4,
      location: res.data.country_name + ' ' + res.data.city
    })
    console.log(res)
  }

  render() {
    return <>
      {this.state.ip === '' ? <></> : <Typography variant='h6' paddingLeft={3} color={'#f5f5f5'}> {this.state.ip + ' From ' + this.state.location}</Typography>}
    </>
  }
}