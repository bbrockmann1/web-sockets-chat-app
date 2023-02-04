import './App.css';
import ChatroomList from './components/chatroomList';
import ChatWindow from './components/chatWindow';
import UsernameChatroom from './components/usernameChatroom';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="appBackground">
      <Header />
      
      <ChatWindow /> 
      <ChatroomList />
      <UsernameChatroom />

      <Footer /> 
    </div>
  );
}

export default App;
