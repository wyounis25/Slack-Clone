import React, { useState } from 'react'
import './ChatInput.css'
import db from "./firebase"
import { useStateValue } from './StateProvider';
import firebase from "firebase"

function ChatInput({ChannelName,ChannelId}) {
    const [input,setInput] = useState('');
    const [{user}] = useStateValue();
    const sendMessage = e => {
    e.preventDefault();
    if (ChannelId) {
        db.collection("rooms").doc(ChannelId).collection("message")({
            message: input,
            timestamp: firebase.firestore.FieldValue.setInput,
            user: user.displayName,
            userImage: user.photoURL
        })
    }
    }
    return (
        <div className = "chatInput">
            <form>
                <input
                value={input}
                onChange= {(e) => setInput(e.target.value)}
                 placeholder={`Message #${ChannelName}`.toLowerCase()}/>
                <button type ="submit" onClick={sendMessage}>
                SEND
                </button>
            </form>
        </div>
    )
}

export default ChatInput
