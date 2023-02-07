import { useState } from 'react';
import './usernameChatroom.css';

function UsernameChatroom() {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

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
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UsernameChatroom;