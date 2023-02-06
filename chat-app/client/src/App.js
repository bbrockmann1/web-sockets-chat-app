import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

        <Routes> 
          <Route path='/' element={ <UsernameChatroom /> } />
          <Route path='/list' element={ <ChatroomList /> } /> 
          <Route path='/window' element={ <ChatWindow /> } />
        </Routes>

      <Footer /> 
    </>
  );
}

export default App;

//make chatroomlist a child of chatWindow and usernameChatroom components 
