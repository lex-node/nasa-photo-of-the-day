/**Step 3 - Fetching the Data**


 x- In `App.js` (or where ever you wanted to fetch the data) add state for the data you'll be getting from NASA.
 X Add an effect hook to handle the API call side effect.
 X- Go to the [NASA APOD API docs](https://api.nasa.gov/api.html#apod) and read through the docs to see how to make the API call.
 X- You don't _need_ an API key. However you may need one if you exceed the API request limits.
 X- Using the endpoint given, fetch the data using `axios`.
 X- In your `.then()` make sure to `console.log` the response so you can look at the shape of the data. 😃
 X- Before you add your data to state, make sure your effect hook has a dependency array (probably empty, since we don't want this effect synced up to any state/props), otherwise you will start an **infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to use a real API_KEY.**

 DEMO KEY rate limits:

 > Hourly Limit: 30 requests per IP address per hour

 > Daily Limit: 50 requests per IP address per day

 _Note: if the photo url is NOT a photo, you will need to learn how to display a video in a React app on your own, OR just fetch the APOD from a different date by adding this to the back of the API endpoint: `&date=2012-03-14`_*/


import React from "react";
import "./App.css";
import axios from 'axios';



function App() {

    const [picture, setPicture] = React.useState("");

    React.useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(pic => {
                setPicture(pic.data.hdurl)
                console.log(pic.data.hdurl);
            })

            .catch(err => console.log(err));
    }, []);

    return (
    <div className="App">
        <img src={picture} alt="NASA pic of the day"/>
        <p>
      </p>
    </div>
  );
}

export default App;
