import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import {spaceText} from "./spaceText";
import styled from 'styled-components'


const InfoDisplayer = (props) => {
    const TextPara = styled.p`
      border-style: solid;
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      font-family: "Lucida Console", Courier, monospace;
      color: red; 
      border-color: darkslateblue;
`

    return (
        <Card>
            <CardBody>
                <CardTitle>{props.spaceData.title}</CardTitle>
                <CardSubtitle>{props.spaceData.date}</CardSubtitle>
                <CardText><TextPara>{spaceText}</TextPara></CardText>
            </CardBody>
        </Card>
    );
}

export default InfoDisplayer;
