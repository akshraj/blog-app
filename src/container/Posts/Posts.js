import React, {Component} from 'react';
import axios from 'axios';
import Spinner from '../../UI/Spinner/Spinner';
import Post from '../../components/Posts/Post';

class Posts extends Component{
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('/posts').then(res => {
            const posts = res.data.slice(0, 4);
            const updatedPosts = posts.map(post=>{
                return {
                    ...post,
                    author: 'akshay'
                }
            });
            this.setState({posts: updatedPosts});
        }).catch(err => {
            console.log(err)
        })
    }

    postClicked = (id)=>{
        console.log(id)
    }

    deletePostHandler=(id)=>{
        axios.delete('/posts/'+id).then(response=>{
            console.log(response)
        })
    }

    render(){
        let loader = <Spinner />
        if(this.state.posts){
            loader = this.state.posts.map(post => {
                return <Post
                    key={post.id} 
                    title={post.title} 
                    body={post.body}
                    author={post.author}
                    clicked={()=>this.postClicked(post.id)}
                    deletePost={()=>this.deletePostHandler(post.id)}
                     />;
            });
        }
        return(
            <article>
                {loader}
            </article>
        )
    }
}

export default Posts;