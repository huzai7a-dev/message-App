import { Button, FormControl, IconButton, Input, InputLabel } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Login from './Login';
import Message from './Message';
import db from './Firebase';
import firebase from 'firebase';
import  FlipMove from 'react-flip-move';

import './App.css';

function App() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState()

  const sendMessage =(e)=>{
    e.preventDefault();
    db.collection("message").add({
      message:input,
      username:userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }

  useEffect(() => {
    db.collection("message").orderBy("timestamp", "desc").onSnapshot(snapshot=>{
      setMessages(snapshot.docs);
    })
  }, [])


  return (
    <div className="App">
      {
        !userName? (<Login name={setUserName}/>):
        (
          <div>
              <h1>Welcome {userName}</h1>
            <form className="app__form">
              <FormControl className="app__formcontrol">
                <InputLabel>Type a message...</InputLabel>
                <Input className="app__input" type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>

                <IconButton className="app__iconbtn" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
                  Send
                </IconButton>
              </FormControl>
            </form>

            <FlipMove>
              {
                messages.map(message=>(
                  <Message key={message.id} text={message.data().message} name={message.data().username} user={userName}/>
                ))
              }
            </FlipMove>
          </div>
        )
      }

    </div>
  );
}

export default App;
