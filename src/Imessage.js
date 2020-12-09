import React from 'react';
import Chat from './Chat';
import "./Imessage.css";
import Sidebar from "./Sidebar";

export default function Imesssage() {
    return (
        <div className="imessage">
            <Sidebar/>
            <Chat/>
        </div>
    )
}
