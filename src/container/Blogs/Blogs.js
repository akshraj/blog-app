import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Blogs.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';

class Blogs extends Component {
    render() {
        return (
            <div className="Blogs" >
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/new-post">New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        )
    }
}


export default Blogs;