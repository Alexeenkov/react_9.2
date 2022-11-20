import React, { useEffect } from 'react';
import { useState } from 'react';
import PostWithComments from '../Post/PostWithComments';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPostsFromServer()
    }, []);

    function getPostsFromServer() {
        fetch(process.env.REACT_APP_API_POSTS)
            .then(response => response.json())
            .then(data => {
                setPosts(prevState => data);
            });
    }

    function renderPosts(posts) {
        const sortedPosts = [];
        for (let i = posts.length - 1; i >= 0; i--) {
            sortedPosts.push(<PostWithComments key={posts[i].id} post={posts[i]} />);
        }
        return sortedPosts;
    }

    return (
        <ul className='posts'>
            {renderPosts(posts)}
        </ul>
    );
}

export default Posts;