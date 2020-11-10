import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import db from './firebase';
import Message from "./Message"
import ChatInput from "./ChatInput"

function Chat() {
	const { roomId } = useParams();
	const [ roomDetails, setRoomDetails] = useState(null);
	const [ roomMessages, setroomMessages] = useState([]);
	//only run this code if the roomID exists
	useEffect(
		() => {
			if (roomId) {
				db.collection('rooms').doc(roomId).onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
			}
			db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot( snapshot => 
				setroomMessages(snapshot.docs.map(doc => doc.data()))
			)
		},
		[ roomId ]
	);
	// name of the room
	console.log(roomDetails);
	//messages that were printed 
	console.log('MESSAGES >>>',roomMessages)
	return (
		<div className="chat">
			{/* <h2> You are in the {roomId} room</h2> */}
			<div className="chat__header">
				<div className="chat__headerLeft">
					<h4 className="chat__channelName">
						<strong> #{roomDetails?.name}</strong>
						<StarBorderIcon />
					</h4>
				</div>
				<div className="chat__headerRight">
					<p>
						<InfoIcon /> Details
					</p>
				</div>
			</div>
			<div className="chat__messages">
				{/* the curlybois allows for destructoring */}
				{roomMessages.map(({messages,timestamp,user,UserImage}) => (
					<Message
					messages={messages}
					timestamp={timestamp}
					user={user}
					UserImage={UserImage}
					/>
				))}
			</div>
			<ChatInput ChannelName={roomDetails?.name} ChannelId = {roomDetails?.id}/>
		</div>
	);
}

export default Chat;
