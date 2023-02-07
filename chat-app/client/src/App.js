import './App.css';
import { Routes, Route } from 'react-router-dom';
import ChatroomList from './components/chatroomList/index';
import ChatWindow from './components/chatWindow/index';
import Footer from './components/footer/index'
import Header from './components/header/index'
import UsernameChatroom from './components/usernameChatroom/index';

function App() {
  return (
    <div>
      <Header />
      <ChatroomList />

        <Routes> 
          <Route path='/' element={ <UsernameChatroom /> } /> 
          <Route path='/chat' element={ <ChatWindow /> } />
          
        </Routes>

      <Footer /> 
    </div>
  );
}

export default App;

//make chatroomlist a child of chatWindow and usernameChatroom components 
