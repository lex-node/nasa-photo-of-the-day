import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import ImageDisplayer from "./ImageDisplayer";
import InfoDisplayer from "./InfoDisplayer";
import {Col, Navbar} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons";
import {faSpaceShuttle} from "@fortawesome/free-solid-svg-icons";
import DropDown from "./DropDown";
import {Data} from './data';

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
            <Navbar tag="h1" style={{color: 'red', backgroundColor: 'black'}}>
                <FontAwesomeIcon icon={faRocket}/>
                NASA Transporter
                <FontAwesomeIcon icon={faSpaceShuttle}/>
            </Navbar>
            <Col>
                <ImageDisplayer spaceData={spaceData}/>
                <InfoDisplayer spaceData={spaceData}/>
            </Col>
        </div>
    );
}

export default App;
