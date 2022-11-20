import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton/BackButton';
import EditContent from '../components/EditContent/EditContent';


const NewPost = () => {
    const navigate = useNavigate();
    const text = useRef('Введите текст');

    async function handleClickCreatePostButton() {
        const data = {
            'id': 0,
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
            <div className='new'>
                <div className="new__wrapper">
                    <div className='new__buttons'>
                        <div className="new__buttons-container">
                            <button className='new__button active' type='button'>
                                <i className="fa fa-fw fa-pencil" aria-hidden="true"></i> Публикация
                            </button>
                            <button className='new__button' type='button'>
                                <i className="fa fa-fw fa-camera" aria-hidden="true"></i> Фото/видео
                            </button>
                            <button className='new__button' type='button'>
                                <i className="fa fa-fw fa-video-camera" aria-hidden="true"></i> Прямой эфир
                            </button>
                            <button className='new__button' type='button'>
                                <i className="fa fa-fw fa-ellipsis-h" aria-hidden="true"></i> Ещё
                            </button>
                        </div>
                        <Link to='/' className='close'>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <EditContent text={text} />
                </div>
                <div className="new__footer">
                    <button className='button' type='button' onClick={handleClickCreatePostButton}>Опубликовать</button>
                </div>
            </div>
        </>
    );
}

export default NewPost;