import './chatroomList.css';
// eslint-disable-next-line
import { roomState } from '../../atoms';
// eslint-disable-next-line
import { useRecoilValue } from 'recoil';

function ChatroomList() {
    // const room = useRecoilValue(roomState);
    
    // const roomList = room.map((item) => {
    //     return `<span>${item}</span>`;
    // })

    return(
        <div className='container'> 
            <h1 className="title">Available Chatrooms</h1>
            <div className='list'>
                
            </div>
        </div>
    );
};

export default ChatroomList;