import './App.css';
import { Routes, Route } from 'react-router-dom'
import ChatroomList from './components/chatroomList';
import ChatWindow from './components/chatWindow';
import UsernameChatroom from './components/usernameChatroom';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="appBackground">
      <Header />

        <Routes> 
          <Route path='/' element={ <UsernameChatroom /> } />
          <Route path='/list' element={ <ChatroomList /> } /> 
          <Route path='/window' element={ <ChatWindow /> } />
        </Routes>

      <Footer /> 
    </div>
  );
}

export default App;

//make chatroomlist a child of chatWindow and usernameChatroom components 
