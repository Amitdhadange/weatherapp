import React, { useEffect, useState } from 'react'
import Temprature from './components/Temprature'
import Highlights from './components/Highlights'

const App = () => {
  
  const [city,setCity] = useState("New Delhi");
  const [weatherData, setweatherData] = useState(null);

  useEffect(() => {
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=a6747520538f4794a21200236242301&q=${city}&aqi=no`;

    fetch(apiURL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setweatherData(data);
        console.log(weatherData.current)
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);
  return (
    <div className='bg-black h-screen w-screen flex justify-center items-center '>

      <div className='bg-gray-900 w-[30%] h-[60%] mr-[20px]'>
      
       {weatherData &&
         <Temprature 
         
         setCity={setCity}
         stats={{
           temp:weatherData.current.temp_c,
           condition:weatherData.current.condition.text,
           isDay:weatherData.current.is_day,
           location:weatherData.location.name,
           time:weatherData.location.localtime
           
          }}
          />
      }

      </div>


      <div className='bg-gray-900 w-[40%] h-[60%] grid grid-cols-2 gap-6 '>
        <h2 className='text-slate-200 text-2xl col-span-2 ml-[12vw]'>Today's Highlights</h2>
        {weatherData && (
          <>
        <Highlights
        stats={{
          title: "Wind Status",
          value: weatherData.current.wind_mph,
          unit: "mph",
          direction: weatherData.current.wind_dir,
        }}
        />
        <Highlights
              stats={{
                title: "Humidity",
                value: weatherData.current.humidity,
                unit: "%",
              }}
            />
            <Highlights
              stats={{
                title: "Visibility",
                value: weatherData.current.vis_miles,
                unit: "miles",
              }}
            />
            <Highlights
              stats={{
                title: "Air Pressure",
                value: weatherData.current.pressure_mb,
                unit: "mb",
              }}
            />

          </>
        )}
        
      </div>
    </div>
  )
}

export default App