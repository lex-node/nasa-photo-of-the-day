import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {

    const [spaceData, setSpaceData] = useState({});

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(res => setSpaceData(res.data))
            // .then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <p>
                {spaceData.date}
            </p>
            <img src={spaceData.hdurl}/>
            <p>
                {spaceData.date}
            </p>
            <p>{spaceData.title}</p>
        </div>
    );
}

export default App;
