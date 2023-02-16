import { useState, useEffect } from 'react';
import './chatroomList.css';
import socket from '../../socket';
import { roomState } from '../../atoms';
import { useRecoilState } from 'recoil';

function ChatroomList() {
    const [rooms, setRooms] = useState([]);
    // eslint-disable-next-line
    const [room, setRoom] = useRecoilState(roomState);

    useEffect(() => {
    
        socket.on("rooms", (data) => {
            setRooms(data);
        });

        return () => {
            socket.disconnect();
        }
    }, []);

    return (
        <div className='container'>
            <h1 className="title">Available Chatrooms</h1>
            <h5>Click on an Available room to add to room name field</h5>
            <div className='list'>
                {rooms.map((room, index) => (
                    <div 
                        key={index} 
                        className="room"
                        onClick={() => setRoom(room)}
                    >
                        {room}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatroomList;
