import React from 'react';
import { Link } from 'react-router-dom';

const GoHome = () => {
    return (
        <div className='create-post'>
            <Link to='/' className='button'>На главную</Link>
        </div>
    );
}

export default GoHome;