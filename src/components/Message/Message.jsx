import React from 'react'
import './Message.scss'
const Message = ({message, timestamp, user, userImage, userId, }) => {
    return (
        <div className="message">
            <img src={userImage} alt="sds" />
            <div className="message__info">
                <h4>
                    {user} {new Date(timestamp?.toDate()).toUTCString()}
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
