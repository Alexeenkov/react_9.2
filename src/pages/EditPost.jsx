import React, { useRef } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import BackButton from '../components/BackButton/BackButton';
import EditContent from '../components/EditContent/EditContent';

const EditPost = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const text = useRef('');

    const post = location.state;
    if (!post) {
        return <Navigate to='/' replace />;
    }
    text.current = post.content;

    async function handleClickSaveButton() {
        const data = {
            'id': post.id,
            'content': text.current,
        };
        fetch(process.env.REACT_APP_API_POSTS, {
            body: JSON.stringify(data),
            method: 'POST',
            'Content-Type': 'application/json',
        }).then(response => {
            if (response.ok) {
                navigate('/', { replace: true });
            }
        });
    }

    return (
        <>
            <BackButton />
            <div className='edit'>
                <div className='edit__header'>
                    <span>Редактировать публикацию</span>
                    <button type='button' className='close' onClick={() => { navigate(-1) }}>
                        <i className='fa fa-times' aria-hidden='true'></i>
                    </button>
                </div>
                <div className='edit__wrapper'>
                    <EditContent text={text} content={ post.content } />
                    <div className='edit__buttons'>
                        <button className="edit__button" type='button'>
                            <i className="fa fa-picture-o" aria-hidden="true"></i> Фото/видео
                        </button>
                        <button className="edit__button" type='button'>
                            <i className="fa fa-users" aria-hidden="true"></i> Отметить друзей
                        </button>
                        <button className="edit__button" type='button'>
                            <i className="fa fa-smile-o" aria-hidden="true"></i> Чувства/действия
                        </button>
                        <button className="edit__button" type='button'>
                            <i className="fa fa-map-marker" aria-hidden="true"></i> Отметить посещение
                        </button>
                    </div>
                </div>
                <div className='edit__footer'>
                    <button type='button' className='button' onClick={handleClickSaveButton}>
                        Сохранить
                    </button>
                </div>
            </div>
        </>
    );
}

export default EditPost;