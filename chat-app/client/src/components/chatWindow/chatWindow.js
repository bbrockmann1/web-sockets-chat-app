import './chatWindow.css';
import io from 'socket.io-client';

// eslint-disable-next-line
const socket = io.connect("http://localhost:3001")

function ChatWindow() {

    function handleSubmit(e) {
        e.preventDefault();
    };

    return(
        <div > <h1>Chat</h1>
            <div>
                {/* Chat messages go here. */}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Enter your message'/>  
                    <input type='submit' value='Send'/>
                </form>
            </div>
        </div>
    );
};

export default ChatWindow;