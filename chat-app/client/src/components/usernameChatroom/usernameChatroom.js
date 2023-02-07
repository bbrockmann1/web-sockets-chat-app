import './usernameChatroom.css' 

function UsernameChatroom() {

    return(
        <div className='container'> 
            <h1>Select a Username and Create a Room</h1>
            <div className='field-container'>
                <form>
                    <input placeholder='Username'/>
                    <input placeholder='Room Name'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default UsernameChatroom;