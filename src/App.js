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
    const [nextAsteroid, setNextAsteroid] = React.useState("");

    React.useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(pic => {
                setPicture(pic.data.url)
                console.log(pic);
            })

            .catch(err => console.log(err));
    }, []);

    React.useEffect(() => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-01-01&end_date=2019-01-07&api_key=DEMO_KEY")
            .then(asteroidData => {
                setNextAsteroid(asteroidData.data.near_earth_objects["2019-01-01"][0].nasa_jpl_url);
                console.log(asteroidData);
                console.log(asteroidData.data.near_earth_objects["2019-01-01"][0].nasa_jpl_url);
            })

            .catch(err => console.log(err));
    }, []);

    return (
    <div className="App">

        <header>
            <h1>NASA INFO OF THE DAY</h1>
        </header>

        <main>
            <p className="tagline"><strong>Nasa Image of the Day</strong>: Check it Out</p>
            <section className="introduction">
                <img src={picture} alt="NASA pic of the day"/>
                <p><a href="https://api.nasa.gov/api.html#apod">NASA's Open APIs</a> provide access to this awesome image of the day.</p>
            </section>
        </main>

        <aside>
            <h3>Nearest Asteroid Information</h3>
            <div className="asteroid-news">
                    <p><a href={nextAsteroid}>Here</a> you can learn lots of information about an asteroid that was very close to earth in the first week of January 2019!</p>
            </div>
            <a href="#" className="button">View All Posts</a>
        </aside>

        <footer>
            <div className="footer-contact-information">
                <p><a href="#">Gabe is the Best</a></p>
                <p><a href="#">He is Cool</a></p>
                <a className="footer-instructor" href="#">Gabe: Number 1 Dude</a>
                <div className="footer-supplemental">
                    <a href="#">Follow @lex_node on Twitter</a>
                </div>
            </div>
            <div className="footer-logo">
                <img src="https://api.nasa.gov/images/logo.png" alt="Nasa Logo"></img>
            </div>
        </footer>
        <p>
      </p>
    </div>
  );
}

export default App;
