import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001")

function ChatWindow() {

    function handleSubmit(e) {
        e.preventDefault();
    };

    return(
        <div > <h1 className='header'>Chat</h1>
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
    );
};

export default ChatWindow;