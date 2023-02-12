import './chatWindow.css';
import socket from '../../socket';
import { useRecoilState, useRecoilValue } from 'recoil';
import {  currentMessageState, usernameState, roomState} from '../../atoms';

function ChatWindow() {
    const [currentMessage, setCurrentMessage] = useRecoilState(currentMessageState);
    const room = useRecoilValue(roomState);
    const username = useRecoilValue(usernameState);

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        if (currentMessage !== '') {

            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: 
                    new Date(Date.now()).getHours() + 
                    ':' + 
                    new Date(Date.now()).getMinutes() 
            };

            await socket.emit("send_message", messageData);
        };
        setCurrentMessage('');
    };

    return(
        <div className='container-all'>
            <div > <h1 className='chat-header'>Chat</h1>
                <div className='chat-container'>
                    {/* Chat messages go here. */}
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