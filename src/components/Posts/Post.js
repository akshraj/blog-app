import React from 'react';
import './Post.css';


const post = (props) => {
    return (
        <div className="Post">
            <article onClick={props.clicked}>
                <h1>{props.title}</h1>
                <p>{props.body}</p>
                <p>{props.author}</p>
            </article>
            <div>
                <button onClick={props.deletePost}>Delete</button>
            </div>
        </div>
    )
}

export default post;



















