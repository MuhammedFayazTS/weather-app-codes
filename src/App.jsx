import { useEffect, useState } from 'react';
import './App.css';
import LeftSection from './Components/LeftSection';
import RightSection from './Components/RightSection';
import { Button, Grid } from '@mui/material'
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { blue} from '@mui/material/colors';


function App() {

  const[weather,setWeather] = useState({});
  const [cityname,setCityName] = useState('kochi');

  let APIkey = 'cc826dabc06882bf8978496fac57b27c'
  const urls = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`
  const fetchData = async()=>{
    const response = await fetch(urls)
    .then(res=>res.json())
    .then(data=>setWeather(data))
  }

useEffect(()=>{
  fetchData();
},[])

// console.log(weather);

  return (
    <div className="App">
       <Container  sx={{paddingTop:{xs:0,md:4}, paddingX:{xs:0,sm:1} }}>
         <Grid container sx={{bgcolor:'#E4F1FF'}}  py={3} borderRadius={3} px={2}   spacing={2}>

        {/* Top section */}
        <Grid item xs={12}>
        {/* <TopSection /> */}
        <Grid container  spacing={2} pr={2}>

<Grid item xs={12} md={5}>
<Typography textAlign={'center'} fontWeight={700} fontSize={28} letterSpacing={1} variant="h5" color={'#3E3E3E'}>
Weather App
</Typography>
</Grid>
<Grid item xs={12} md={7}>
    {/* search bar */}
<Grid container columnGap={1}>
    <Grid xs={10} ml={1}>
        <TextField onChange={e=>{setCityName(e.target.value)}}  id="filled-basic" label="City Name" sx={{bgcolor:'#fff'}} color="primary"  size="small" fullWidth />
    </Grid>
    <Grid xs={1}>
    <Button onClick={fetchData} sx={{bgcolor:blue[500]}} variant="contained">
        <SearchIcon />
    </Button>
    </Grid>
</Grid>
{/* searchbar end */}
</Grid>
</Grid>
        </Grid>

      {/* left section */}
        <Grid item xs={12} md={5}>
          <LeftSection weatherData={weather} />
        </Grid>
      {/* right section */}
        <Grid item xs={12} md={7}>
          <RightSection  weatherData={weather} />
        </Grid>

        </Grid>

       </Container>
    </div>
  );
}

export default App;
