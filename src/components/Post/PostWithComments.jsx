import React from 'react';
import Avatar from '../Avatar/Avatar';
import PostContent from './PostContent';

const PostWithComments = ({ post }) => {
    return (
        <li className='post'>
            <PostContent post={post} />
            <div className="post__footer">
                <Avatar />
                <div className='post__commet-container'>
                    <input type="text" className="post__comment" placeholder='Напишите комментарий...' />
                    <div className="post__input-icons">
                        <button className='post__input-icon'>
                            <i className="fa fa-smile-o" aria-hidden="true"></i>
                        </button>
                        <button className='post__input-icon'>
                            <i className="fa fa-camera" aria-hidden="true"></i>
                        </button>
                        <button className='post__input-icon'>
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default PostWithComments;