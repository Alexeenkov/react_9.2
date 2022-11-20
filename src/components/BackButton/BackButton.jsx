import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div className='create-post'>
            <button type='button' className='button' onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
}

export default BackButton;