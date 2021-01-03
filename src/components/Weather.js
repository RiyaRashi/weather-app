import React, { useEffect, useState } from 'react';
import "./css/weather.css";
const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    const [weather, setWeather] = useState(null);
    const [sys, setSys] = useState(null);
    const [date, setDate] = useState(new Date());
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer);
        }
    })
    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9134f2bb45593ab008f080b052d2d63e`
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
            console.log(resJson.main);
            setWeather(resJson.weather);
            console.log(resJson.weather);
            setSys(resJson.sys);
            console.log(resJson.sys);
        }
        fetchApi();
    }, [search])
    return (
        <div className={(city) ? ((city.temp > 16) ? 'app warm' : 'app') : 'no'}>

            <main>
                <center>
                    <div className='search-box'>

                        <input type="search"
                            value={search}
                            className='search-bar'
                            onChange={(event) => {
                                setSearch(event.target.value)
                            }}
                        />

                    </div>
                </center>
                {(!city || !sys || !weather) ? (

                    <h1>Opsss...<br></br>no data found</h1>
                ) : (
                        <div >
                            <div className='location-box'>
                                <h2 className='location'>

                                    <i className="fas fa-street-view  white  "></i>{search},
                                            {sys.country}
                                </h2>
                                <div className="date">
                                    {date.toLocaleDateString()}, {weekday[date.getDay()]}<br />
                                    {date.toLocaleTimeString()}<br />

                                </div>
                                <div className='weather-box'>
                                    <h1 className='temp'>
                                        {city.temp}°Cel

                                         </h1>
                                    <div className='weather'>  {weather[0].description}</div>
                                </div>
                                <h3 className="tempminmax">

                                    feels like:{city.feels_like}°Cel<br />
                            min:{city.temp_min}°Cel | max:{city.temp_max}°Cel<br />
                                </h3>
                            </div>
                        </div>
                    )}

            </main>

        </div>
    )
}



export default Weather;


