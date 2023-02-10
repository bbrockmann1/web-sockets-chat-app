import './chatWindow.css';
import io from 'socket.io-client';

// eslint-disable-next-line
const socket = io.connect("http://localhost:3001")

function ChatWindow() {

    function handleSubmit(e) {
        e.preventDefault();
    };

    return(
        <div className='container-all'>
            <div > <h1 className='chat-header'>Chat</h1>
                <div className='chatContainer'>
                    {/* Chat messages go here. */}
                </div>
                <div className='chatInputContainer'>
                    <form className='chatInput' onSubmit={handleSubmit}>
                        <input type='text' placeholder='Enter your message'/>  
                        <input type='submit' value='Send'/>
                    </form>
                </div>
            </div>
        </div>    
    );
};

export default ChatWindow;