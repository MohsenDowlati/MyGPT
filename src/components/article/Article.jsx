import React from 'react';
import './article.css';
const Article = ({imgURL , alt , title , date}) => {
    return (
        <div className={"gpt3_blog_container_article"}>
            <div className={"gpt3_blog_container_article_image"}>
                <img src={imgURL} alt={alt}/>
            </div>
            <div className={"gpt3_blog_container_article_content"}>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article;