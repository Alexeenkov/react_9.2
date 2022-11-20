import React from 'react';
import avatar from "./../../images/avatar.png";

const Avatar = () => {
    return (
        <div className="avatar">
            <img src={avatar} alt="Аватарка" />
        </div>
    );
}

export default Avatar;