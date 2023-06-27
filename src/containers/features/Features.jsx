import React from 'react';
import './features.css';
import {Feature} from "../../components";

const featuresData = [
    {
        title : 'Improving end distrusts instantly' ,
        text : 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add.'
    },
    {
        title: 'Become the tended active' ,
        text: 'To make your document look professionally produced, Word provides header, footer, cover page, and text box designs that complement each other.'
    },
    {
        title: 'Message or am nothing' ,
        text: 'Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme.'
    },
    {
        title: 'Really boy law country',
        text: 'Save time in Word with new buttons that show up where you need them. To change the way a picture fits in your document, click it and a button for layout options appears next to it.'
    }
];
const Features = () => {
    return (
        <div className={"gpt3_features section_padding"} id={"features"}>
            <div className={"gpt3_features_heading"}>
                <h1 className={"gradient_text"}>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className={"gpt3_features_container"}>
                {featuresData.map((item,index)=>
                <Feature title={item.title} text={item.text} key={item.title+index}/>
                )}
            </div>
        </div>
    )
}

export default Features;