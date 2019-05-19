import React from "react";


const Post = (props) => {
    return(
        <section className="about section">
            <div className="section-inner">
                <h2 className="heading">{props.title}</h2>
                <div className="content">
                    <p>{props.text}</p>
                </div>
            </div>
        </section>
    );
}


export default Post;