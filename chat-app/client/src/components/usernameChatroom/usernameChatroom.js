import './usernameChatroom.css';
import { usernameState, roomState } from '../../atoms';
import { useRecoilState } from 'recoil';
import socket from '../../socket';

function UsernameChatroom() {
    const [username, setUsername] = useRecoilState(usernameState);
    const [room, setRoom] = useRecoilState(roomState);

    function joinRoom(e) {
        e.preventDefault();
        if (username !== "" && room !== "") {
            socket.emit("join_room", room);
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