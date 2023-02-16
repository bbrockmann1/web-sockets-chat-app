import './chatWindow.css';
import socket from '../../socket';
import { useRecoilState, useRecoilValue } from 'recoil';
import {  currentMessageState, usernameState, roomState} from '../../atoms';
import { useEffect, useState } from 'react';

function ChatWindow() {
    const [currentMessage, setCurrentMessage] = useRecoilState(currentMessageState);
    const [messageList, setMessageList] = useState([]);
    const room = useRecoilValue(roomState);
    const username = useRecoilValue(usernameState);

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        if (currentMessage !== '') {

            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                date_time: 
                    new Date(Date.now()).getHours() + 
                    ':' + 
                    new Date(Date.now()).getMinutes() +
                    ' on ' +
                    new Date().toLocaleDateString('en-US')
            };

            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
        };
        setCurrentMessage('');
    };

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [setMessageList]);

    return(
        <div className='container-all'>
            <div > <h1 className='chat-header'>Chat</h1>
                <div className='chat-container'>
                    {messageList.map((content, index) => {
                        return <li key ={index} className='content'>{content.message}</li>
                    })}
                </div>
                    <div className='form-container'>
                        <form className='chatInput' onSubmit={handleSubmit}>
                            <input 
                                type='text' 
                                placeholder='Enter your message' 
                                className='input'
                                value={currentMessage}
                                onChange={(e) => setCurrentMessage(e.target.value)}
                            />  
                            <button type='submit' className='button'>Enter Message &#9658;</button>
                        </form>
                    </div>    
            </div>
        </div>    
    );
};

export default ChatWindow;