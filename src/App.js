import './App.css';
import { Fade, Container, Grid, Paper, Stack, Typography, Tooltip, Autocomplete, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { Box } from '@mui/system';
import Draggable from 'react-draggable';
import { TypeAnimation } from 'react-type-animation';
import pic from './pic.png'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {

  const options = [
    { title: 'Github', link: 'https://github.com/HotAndLonely', cate: 'Social' },
    { title: 'Discord', link: 'xenon#1272', cate: 'Social'},
    { title: 'Email', link: 'akaxenonxss@gmail.com', cate: 'Social' },
    { title: 'Lypus', link: 'gitlypus.c0m', cate: 'Group'},
    { title: 'Roam', link: 'gitdeRoam', cate: 'Open source'},
    { title: 'Geneva', link: 'gitdegeneva', cate: 'Open source'},
    { title: 'Ethereum', link: 'wallete80230ru23r', cate: 'Finance'},
    { title: 'Bitcoin', link: 'walleteBTC80230ru23r', cate: 'Finance'},
    { title: 'Paypal', link: 'Paypal.menoseque', cate: 'Finance'}
  ]

  return <>
    <ThemeProvider theme={darkTheme}>
      <Fade in={true}>
        <Container>
          <Draggable>
            <Grid border={1} borderColor={'skyblue'} borderRadius={1} width={'90%'}>
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
                        groupBy={(options) => options.cate}
                        renderInput={(params) => <TextField id='tf' className='autocompleteStyle' variant='standard' {...params} />}
                        />]}
                      typingWords={['']}></TarjetaTerminal>
                  </Stack>
                  <Stack textAlign={'right'} margin='auto' overflow={'hidden'}>
                    <Tooltip title={'Github 👀'}>
                      <img id='profilepic' onClick={() => { window.open('https://github.com/HotAndLonely', '_blank').focus() }} style={{'margin': 'auto' }} width={450} src={pic} alt={"github pic"} />
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
        }
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontFamily: 'Consolas' }}
    />
  );
};

