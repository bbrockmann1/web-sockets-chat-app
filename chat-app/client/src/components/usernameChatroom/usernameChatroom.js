import './usernameChatroom.css';
import { usernameState, roomState } from '../../atoms';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import socket from '../../socket';

function UsernameChatroom() {
    const [username, setUsername] = useRecoilState(usernameState);
    const [room, setRoom] = useRecoilState(roomState);
    
    const navigate = useNavigate();
    

    function joinRoom(e) {
        e.preventDefault();
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
            navigate('/chat');
        }
        else {
            alert("Please enter a username and room name.");
        };

    };

    return(
        <div className='container'> 
            <h1>Select a Username and Create a Room</h1>
            <div className='field-container'>
                <form onSubmit={joinRoom}>
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
                    <button type='submit'>Submit &#9658;</button>
                </form>
            </div>
        </div>
    );
};

export default UsernameChatroom;