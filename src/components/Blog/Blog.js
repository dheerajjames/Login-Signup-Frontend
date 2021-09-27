import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import styles from './Blog.module.css';

const url = "http://localhost:4000/blogs";


export default function Blog() {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch(url).then((response) => {
            return response.json()
         }).then((data) => {
            //  console.log(data.data)
             setBlog(data.data)
         }).catch(error => {
             console.log(error);
         })
    },[])

    const posts = blog.map((post) => {
      return (
        <Link className={styles.mainContainer} to={"/post/" + post.blogId} key={post.blogId}>
          {/* <div className={styles.blogCard}>
            <div className={styles.miniCard}>
            <h1>{post.blogTitle}</h1>
            </div>
            <img src={post.blogImage} alt="blogImage"></img>
          </div> */}
          <div className={styles.card}>
           <div className={styles.blogcard}>
        <img src={post.blogImage} className={styles.blogthumbnail}/>
      <div className={styles.blogdetails}>
          <h1>{post.blogTitle}</h1>
          <br></br>
          {post.author}
      </div>
    </div>
    </div>

        </Link>
      );
    });
  
    return <div className="blog">{posts}</div>;
  }
  