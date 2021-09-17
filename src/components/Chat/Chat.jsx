import React, { useEffect, useState } from "react";
import "./Chat.scss";
import { useParams } from "react-router";
import Message from "../Message/Message";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";
import db from "../../firebase";
const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setRoomMessages(snapshot.docs.map((doc) => doc.data()));
      });
    return () => {};
  }, [roomId]);

  console.log(roomMessages);
  return (
    <div className="chat">
      <h2>You are in the {roomDetails?.name} room</h2>
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <div className="strong">#{roomDetails?.name}</div>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined />
            Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map(({message, timestamp, user, userImage}) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Chat;
