import React from 'react';
import GoHome from '../components/GoHome/GoHome';

const NotFound = () => {
    return (
        <>
            <GoHome />
            <div className='not-found-text'>Ошибка 404. Страница не найдена</div>
        </>
    );
}

export default NotFound;