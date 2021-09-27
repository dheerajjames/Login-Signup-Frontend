import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import {useEffect, useState} from 'react';
import styles from './Post.module.css';


// const url = "http://localhost:4000/blogs";
const url = 'https://blog-backend-1.herokuapp.com/blogs';



export default function Post() {
  
  const [blog, setBlog] = useState([]);
  const { blogId } = useParams();

  useEffect(() => {
      fetch(`${url}/${blogId}`).then((response) => {
          return response.json()
       }).then((data) => {
          //  console.log(data.data)
           setBlog(data.data)
       }).catch(error => {
           console.log(error);
       })
  },[blogId])
  // console.log(blog.relatedLinks);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
      <h1 className={styles.title}>{blog.blogTitle}</h1>
      {/* <hr /> */}
      <img src={blog.blogImage} className={styles.image}></img>
      <p>{blog.blogContent}</p>
      </div>
      <div className={styles.aside}>
        {blog.relatedLinks?
        blog.relatedLinks.map((item)=>(
        <div key={item.blogId} className={styles.asideItem}>
        <Link to={"/post/" + item.relatedBlogId} > <p>{item.relatedBlogTitles}</p></Link>
        <br></br>
        </div>
        ))
          :
       <h5>None</h5>
       }
      </div>
    </div>
  );
}
