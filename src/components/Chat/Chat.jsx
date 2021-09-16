import React from 'react'
import './Chat.scss'
import { useParams } from 'react-router';
import { StarBorderOutlined, InfoOutlined } from '@material-ui/icons';

const Chat = () => {
    const {roomId} = useParams()
    return (
        <div className="chat">
            <h2>You  are in the {roomId} room</h2>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <div className="strong">#{roomId}</div>
                        <StarBorderOutlined/>
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlined/>
                        Details 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Chat
