import React from 'react';
import './header.css';

import people from '../../assets/people.png'
import ai from '../../assets/ai2.png'
const Header = () => {
    return (
        <div className={"gpt3_header section_padding"} id={"home"}>
            <div className={"gpt3_header_content"}>
                <h1 className={"gradient_text"}>Let's Build Something amazing with GPT-3 OpenAI</h1>
                <p>GPT models give applications the ability to create
                    human-like text and content (images, music, and more), and answer questions in a conversational manner.
                    Organizations across industries are using GPT models and generative AI for Q&A bots, text summarization,
                    content generation, and search.</p>
                <div className={"gpt3_header_content_input"}>
                    <input type={"email"} placeholder={"Your E-mail Address"}/>
                    <button type={"button"}>Get Started</button>
                </div>
                <div className={"gpt3_header_content_people"}>
                    <img src={people} alt={"people"}/>
                    <p>1,600 people requested access a visit in last 24 hours.</p>
                </div>
            </div>
            <div className={"gpt3_header_image"}>
            <img src={ai} alt={"ai"}/>
            </div>
        </div>
    )
}

export default Header;