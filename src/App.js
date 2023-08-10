import React, { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'c88e71ce-92d0-4473-a599-cd3661d31060';

const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div className="app">
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
          ).play()
        }
      />
    </div>
  );
};

export default App;
