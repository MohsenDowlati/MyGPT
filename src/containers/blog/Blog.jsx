import React from 'react';
import './blog.css';
import {Article} from "../../components";
import {blog1, blog2, blog3, blog4, blog5} from "../../assets/blogIndex";

const articlesData = [
    {
        imgURL : blog2 ,
        alt : 'speed',
        title : 'GPT_3 and Open AI is the future. Let us explore how it is?',
        date : 'Sep 26,2021'
    } , {
        imgURL : blog3 ,
        alt : 'chain',
        title : 'Don\'t Ban ChatGPT in Schools. Teach With it.',
        date : 'Jan 3, 2021'
    } , {
        imgURL : blog4 ,
        alt : 'prespective',
        title : 'When GPT-4 will be launched?',
        date : 'May 1, 2022'
    } , {
        imgURL : blog5 ,
        alt : 'warning',
        title : 'Future is Coming',
        date : 'Feb 29, 2023'
    }
]

const Blog = () => {
    return (
        <div className={"gpt3_blog section_padding"} id={"blog"}>
            <div className={"gpt3_blog_heading"}>
                <h1 className={"gradient_text"}>A lot is happening, We are blogging about it.</h1>
            </div>
            <div className={"gpt3_blog_container"}>
                <div className={"gpt3_blog_container_groupA"}>
                    <Article imgURL={blog1} alt={'binary'} title={'Advantages and Treatments'} date={'Sep 11, 2020'}/>
                </div>
                <div className={"gpt3_blog_container_groupB"}>
                    {articlesData.map((item,index)=>
                        <Article imgURL={item.imgURL} alt={item.alt} date={item.date} title={item.title} key={item.title+index}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Blog;