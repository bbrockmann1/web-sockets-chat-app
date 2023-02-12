import { useState } from 'react';
import { Socket } from 'socket.io-client';
import './usernameChatroom.css';

function UsernameChatroom() {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    function joinRoom(e) {
        e.preventDefault();
        if (username !== "" && room !== "") {
            Socket.emit("join_room", room)
        };
    };

    return(
        <div className='container'> 
            <h1>Select a Username and Create a Room</h1>
            <div className='field-container'>
                <form>
                    <input 
                        placeholder='Username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        placeholder='Room Name'
                        value={room}
                        onChange={e => setRoom(e.target.value)}
                    />
                    <button onClick={joinRoom}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UsernameChatroom;