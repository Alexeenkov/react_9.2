import React from 'react';
import ContentEditable from 'react-contenteditable';
import Avatar from '../Avatar/Avatar';

const EditContent = ({ text, content }) => {
    function handleChangeContentEditable(e) {
        text.current = e.target.value;
    }

    return (
        <form action="#" className="new__form">
            <div className="new__content">
                <Avatar />
                <ContentEditable
                    html={content || 'Введите текст'}
                    disabled={false}
                    onChange={handleChangeContentEditable}
                    tagName='div'
                    className='new__input'
                />
                <button type='button' className='new__smile'>
                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                </button>
            </div>
        </form>
    );
}

export default EditContent;