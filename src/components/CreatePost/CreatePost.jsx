import React from 'react';
import { Link } from 'react-router-dom';

const CreatePost = () => {
    return (
        <div className='create-post'>
            <Link to='/posts/new' className='button'>Создать пост</Link>
        </div>
    );
}

export default CreatePost;