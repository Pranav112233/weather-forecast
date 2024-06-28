import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({ info }) {
    const INIT_URL ="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = "https://images.pexels.com/photos/373481/pexels-photo-373481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return(
        <div className="InfoBox">
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80
            ? RAIN_URL
            : info.temp > 25
            ? HOT_URL
            : COLD_URL
        }
           
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
             info.humidity > 80
             ? <ThunderstormIcon/>
             : info.temp > 25
             ? <WbSunnyIcon/>
             : <AcUnitIcon/>
            }
        </Typography>
        <Typography variant="body2" color="text.secondary"component={"span"}>
         <div>Temperature = {info.temp}&deg;C</div>
         <div>Humidity = {info.humidity}</div>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempmax}&deg;C</p>
         <p>The Weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}