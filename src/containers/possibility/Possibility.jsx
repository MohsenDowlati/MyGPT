import React from 'react';
import './possibility.css';

import possibility from '../../assets/possibility.png';
const Possibility = () => {
    return (
        <div className={"gpt3_possibility section_padding"} id={"possibility"}>
            <div className={"gpt3_possibility_image"}>
                <img src={possibility} alt={"possibility"}/>
            </div>
            <div className={"gpt3_possibility_content"}>
                <h4>Request Early Access to Get Started.</h4>
                <h1 className={"gradient_text"}>The possibilities are beyond your imagination.</h1>
                <p>Beyond Imagination can refer to something that is so extraordinary or extraordinary that it is difficult
                    or impossible to imagine or conceive of. It can also refer to something that is so advanced or advanced
                    that it is beyond the current state of human understanding or technology.</p>
                <h4>Request Early Access to Get Started.</h4>
            </div>
        </div>
    )
}

export default Possibility;