import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import ImageDisplayer from "./ImageDisplayer";

function App() {

    const [spaceData, setSpaceData] = useState({});

    useEffect(() => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(res => setSpaceData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <h1>NASA Transporter</h1>
            <ImageDisplayer spaceData={spaceData}/>
        </div>
    );
}

export default App;
