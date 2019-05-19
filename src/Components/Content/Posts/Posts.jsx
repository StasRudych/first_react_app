import React from "react";
import Post from './Post/Post';

const Posts = (props) => {
    return(
        props.posts.map(p => <Post title={p.title} text={p.text}/>)
    );
}


export default Posts;