import React from 'react';
import './whatGPT3.css';
import {Feature} from "../../components";
const WhatGPT3 = () => {
    return (
        <div className={"gpt3_whatgpt3 section_margin"} id={"wgpt3"}>
            <div className={"gpt3_whatgpt3_feature"}>
                <Feature title={"What is GPT-3"} text={"Generative Pre-trained Transformers, commonly known as GPT, are a family of neural network models that uses the transformer architecture and is a key advancement in artificial intelligence (AI) powering generative AI applications such as ChatGPT."}/>
            </div>
            <div className={"gpt3_whatgpt3_heading"}>
                <h1 className={"gradient_text"}>The possibilities are beyond your imagination.</h1>
                <p><a href={"#blog"}>Explore The Library</a></p>
            </div>
            <div className={"gpt3_whatgpt3_container"}>
                <Feature title={"Chatbots"} text={"Chatbots can make it easy for users to find the information they need by responding to their questions and requests—through text input, audio input, or both—without the need for human intervention."}/>
                <Feature title={"Knowledge base"} text={"A knowledge base is a self-serve online library of information about a product, service, department, or topic.The data in your knowledge base can come from anywhere. Typically, contributors who are well versed in the relevant subjects add to and expand the knowledge base."}/>
                <Feature title={"Education"} text={"Advanced chatbots could be used as powerful classroom aids that make lessons more interactive, teach students media literacy, generate personalized lesson plans, save teachers time on admin, and more."}/>
            </div>
        </div>
    )
}

export default WhatGPT3;