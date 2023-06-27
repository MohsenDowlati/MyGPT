import React from 'react';
import './brand.css';
import {dropbox,google,slack,shopify,atlassian} from "../../assets/brandIndex";

const Brand = () => {
    return (
        <div className={"gpt3_brand section_padding"}>
            <div>
                <a href={"https://www.google.com/"}><img src={google} alt={"google"}/></a>
            </div>
            <div>
                <a href={"https://www.dropbox.com/"}><img src={dropbox} alt={"dropbox"}/></a>
            </div>
            <div>
                <a href={"https://www.slack.com/"}><img src={slack} alt={"slack"}/></a>
            </div>
            <div>
                <a href={"https://www.shopify.com/"}><img src={shopify} alt={"shopify"}/></a>
            </div>
            <div>
                <a href={"https://www.atlassian.com/"}><img src={atlassian} alt={"atlassian"}/></a>
            </div>
        </div>
    )
}

export default Brand;