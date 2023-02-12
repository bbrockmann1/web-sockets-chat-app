import './chatWindow.css';

function ChatWindow() {

    function handleSubmit(e) {
        e.preventDefault();
    };

    return(
        <div className='container-all'>
            <div > <h1 className='chat-header'>Chat</h1>
                <div className='chat-container'>
                    {/* Chat messages go here. */}
                </div>
                    <div className='form-container'>
                        <form className='chatInput' onSubmit={handleSubmit}>
                            <input type='text' placeholder='Enter your message' className='input'/>  
                            <input type='submit' value='Send' className='button'/>
                        </form>
                    </div>    
            </div>
        </div>    
    );
};

export default ChatWindow;