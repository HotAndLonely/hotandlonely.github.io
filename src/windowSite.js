import './App.css';
import { Fade, Container, Grid, Paper, Stack, Typography, Tooltip, Autocomplete, TextField, Button, Alert } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { Box } from '@mui/system';
import Draggable from 'react-draggable';
import { TypeAnimation } from 'react-type-animation';
import pic from './pic.png'
import AnimateBackground from './components/background';
import { useEffect } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {

  const options = [
    { title: 'Github', link: 'https://github.com/HotAndLonely', action: 'href', cate: 'Social' },
    { title: 'Discord', link: 'xenon#1272', cate: 'Social' },
    { title: 'Email', link: 'mailto:akaxenonxss@gmail.com', action: 'href', cate: 'Social' },
    { title: 'Lypus', link: 'https://github.com/Team-Lypus', action: 'href', cate: 'Group' },
    { title: 'Roam', link: 'https://github.com/abrahampo1/roam', action: 'href', cate: 'Open source' },
    { title: 'Geneva', link: 'https://github.com/HotAndLonely/Geneva', action: 'href', cate: 'Open source' },
    { title: 'Ethereum', link: '0x67881F604f0f3E6244A43179654C6239227ce47F', cate: 'Finance' },
  ]

  return <>
  <AnimateBackground></AnimateBackground>
    <Title />
    <ThemeProvider theme={darkTheme}>
      <Fade in={true}>
        <Container>
          <Draggable>
            <Grid id='mainwindow' border={1} borderColor={'skyblue'} borderRadius={1} width={'100%'}>
              <Paper elevation={16}>
                <Stack direction={'row'}>
                  <Stack direction={'column'}>
                    <TarjetaTerminal words={['display', 'info']} typingWords={["Hello, I'm XSS", "Welcome to my website"]} />
                    <TarjetaTerminal id='comandoTarjeta' words={[
                      'open',
                      <Autocomplete id={'comando'} options={options} getOptionLabel={(option) => option.title}
                        sx={{ width: 200 }}
                        groupBy={(options) => options.cate}
                        renderInput={(params) => <TextField id='tf' className='autocompleteStyle' variant='standard' {...params} />}
                      />]}>
                    </TarjetaTerminal>
                    <Stack margin='auto'>
                      <Button onClick={() => {
                        let comando = document.getElementById('comando');
                        options.forEach(element => {
                          if (element['title'] === comando.value) {
                            if (element['action'] === 'href') {
                              window.open(element['link'], '_blank').focus()
                            } else {
                              navigator.clipboard.writeText(element['link']);
                              alert('Clipboard copied! ╰(*°▽°*)╯')
                            }
                          }
                        });
                      }}
                        variant="outlined"
                      >Launch</Button>
                    </Stack>

                  </Stack>

                  <Stack textAlign={'right'} margin='auto' overflow={'hidden'}>
                    <Tooltip title={'Github 👀'}>
                      <img id='profilepic' onClick={() => { window.open('https://github.com/HotAndLonely', '_blank').focus() }} style={{ 'margin': 'auto' }} width={450} src={pic} alt={"github pic"} />
                    </Tooltip>
                  </Stack>
                </Stack>
              </Paper >
            </Grid>
          </Draggable>
          <Draggable>
            <Grid id='phonewindow' border={1} borderColor={'skyblue'} borderRadius={1} width={'100%'}>
              <Paper elevation={16}>
                <Stack direction={'row'}>
                  <Stack direction={'column'}>
                    <TarjetaTerminal words={['display', 'info']} typingWords={["Hello, I'm XSS", "Welcome to my website"]} />
                    <TarjetaTerminal id='comandoTarjeta' words={[
                      'open',
                      <Autocomplete id={'comando'} options={options} getOptionLabel={(option) => option.title}
                        sx={{ width: 200 }}
                        groupBy={(options) => options.cate}
                        renderInput={(params) => <TextField id='tf' className='autocompleteStyle' variant='standard' {...params} />}
                      />]}>
                    </TarjetaTerminal>
                    <Stack margin='auto'>
                      <Button onClick={() => {
                        let comando = document.getElementById('comando');
                        options.forEach(element => {
                          if (element['title'] === comando.value) {
                            if (element['action'] === 'href') {
                              window.open(element['link'], '_blank').focus()
                            } else {
                              navigator.clipboard.writeText(element['link']);
                              alert('Clipboard copied! ╰(*°▽°*)╯')
                            }
                          }
                        });
                      }}
                        variant="outlined"
                      >Launch</Button>
                    </Stack>
                  </Stack>
                  <Stack textAlign={'right'} margin='auto' overflow={'hidden'}>
                    <Tooltip title={'Github 👀'}>
                      <img id='profilepic' onClick={() => { window.open('https://github.com/HotAndLonely', '_blank').focus() }} style={{ 'margin': 'auto' }} width={450} src={pic} alt={"github pic"} />
                    </Tooltip>
                  </Stack>
                </Stack>
              </Paper >
            </Grid>
          </Draggable>
          <div id='alertas'>
          </div>
        </Container>

      </Fade>
    </ThemeProvider>
  </>
}
function Title() {
  useEffect(() => {
    document.title = 'XSS oner 👀';
  }, []);
}

function TarjetaTerminal(props) {
  if (props.typingWords == null) {
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
      </Box>
    </>
  } else {
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

