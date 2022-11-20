import React from 'react';
import { useLocation, useNavigate, Link, Navigate } from 'react-router-dom'
import PostContent from './PostContent';

const PostWithButtons = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const post = location.state;
    if (!post) {
        return <Navigate to='/' replace/>;
    }

    function handlerDeleteButton() {
        fetch(process.env.REACT_APP_API_POSTS + '/' + post.id, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    navigate('/', { replace: true });
                }
            });
    }

    return (
        <li className='post'>
            <PostContent post={post} />
            <div className='post__buttons-container'>
                <Link to={`/posts/${post.id}/edit`} state={post} className='button'>Изменить</Link>
                <button type='button' className='button button__delete' onClick={handlerDeleteButton}>Удалить</button>
            </div>
        </li>
    );
}

export default PostWithButtons;