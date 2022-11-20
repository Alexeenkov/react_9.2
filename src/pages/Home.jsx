import React from 'react';
import CreatePost from '../components/CreatePost/CreatePost';
import Posts from '../components/Posts/Posts';

const Home = () => {
    return (
        <>
            <CreatePost />
            <Posts />
        </>
    );
}

export default Home;