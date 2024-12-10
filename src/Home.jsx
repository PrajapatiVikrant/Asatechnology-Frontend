import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Home.css"
import { Link } from "react-router";
function Home() {
   const [weathericon,setweathericon] = useState('')
   const [temperature,settemperature] = useState('')
   const [humidity,sethumidity] = useState('')
   const [wind_speed,setwind_speed] = useState('')
   const [city,setcity] = useState('New York')
   const [showcity,setshowcity] = useState('')
    useEffect(() => {
        getdata()
    }, [])
    async function getdata() {
        const data = await axios(`http://localhost:4000/weather/${city}`,{
            headers:{
              Authorization: `Bearer ${localStorage.getItem('token')}`, 
            }
          });
        setweathericon(data.data.current.weather_icons[0]);
        settemperature(data.data.current.temperature)
        sethumidity(data.data.current.humidity)
        setwind_speed(data.data.current.wind_speed)
        setshowcity(data.data.location.name)
        console.log(data.data)

       
       
    }

    return (
        <>
        <div className="weatherctn">
           <div className="container">
            
            <div className="searchctn">
                <input type="text" value={city} onChange={(e)=>setcity(e.target.value)} placeholder="Search any city here..." />
                <i className="fa-solid fa-magnifying-glass" onClick={getdata}></i>
            </div>
            <img className="weatherIcon" src={weathericon} alt="icon" />
            <div className="temperatureCtn">
            <div className="temperature">{temperature}°C</div>
            <div className="cityName">{showcity}</div>
            </div>

            <br />
            <div className="otherDetail">
                <div>{humidity}% <br /> <span>Humidity</span></div>
                <div>{wind_speed}km/h <br /> <span>Wind Speed</span></div>
            </div>
            
            </div> 
            
        </div>
        <p>Click to see all user'report if you are admin <Link to='/report'>Report</Link></p>
        </>
    )
}
export default Home;