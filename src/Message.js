import React from 'react';
import './Message.css';

function Message({ messages, timestamp, user, UserImage }) {
	return (
		<div className="message">
			<img src={UserImage} alt=""/>
			<div className="message__info">
				<h4>{user} <span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
				<p>{messages}</p>
			</div>
		</div>
	);
}

export default Message;
