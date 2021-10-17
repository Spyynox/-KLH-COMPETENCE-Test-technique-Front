import React, { Component } from 'react';
import axios from 'axios';
import './../index.css'

class postList extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })
    }


    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>List of Posts</h1>
                {
                    posts.map(post => <div key={post.id}>{post.title}</div>)
                }
            </div>
        )
    }
}

export default postList
