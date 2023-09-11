import React from "react";
import FileUpload from "./fileUpload";
//import 'react-chat-widget/lib/styles.css';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import bot from '../Images/bot.png';
import DragDrop from "./DnD";
import Post from './post';
import GenerateEmail from './generate';
import logo from '../Images/logo.png';
import Header from "./header";
import URLUploader from "./urlUploader";

function Main() {
  const steps = [
    {
      id: '0',
      message: 'Hi, I am your QABank bot.',
      trigger: '1',
    }, {
      id: '1',
      message: 'Do you want me to write an email for you?',
      trigger: 'confirm-user'
    },
    {
      id: 'confirm-user',
      options: [
        { value: 'y', label: 'Yes', trigger: 'yes-response' },
        { value: 'n', label: 'No', trigger: 'no-response' },
      ]
    },
    {
      id: 'yes-response',
      message: 'Great! Please share your organization name',
      trigger: 'question1'
    },
    {
      id: 'no-response',
      message: 'Sorry to hear that.',
      end: true
    },
    {
      id: 'question1',
      user: true,
      trigger: 'question2'
    },
    {
      id: 'question2',
      message: 'Great! Please share the organization website',
      trigger: 'question2Ans'
    },
    {
      id: 'question2Ans',
      user: true,
      trigger: 'submit'
    },
    {
      id: 'submit',
      component: <Post />,
      trigger: 'question3'
    },
    {
      id: 'question3',
      message: 'Please share the subject of email',
      trigger: 'question3Ans'
    },
    {
      id: 'question3Ans',
      user: true,
      trigger: 'generate'
    },
    {
      id: 'generate',
      component: <GenerateEmail />,
      asMessage: true,
      end: true
    },
  ];

  const theme = {
    background: 'white',
    headerBgColor: '#329ec6',
    headerFontSize: '14px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#b8391e',
    userFontColor: 'white',
  };

  const config = {
    botAvatar: bot,
    floating: false,
    // width: '400px',
    // height: '500px',

  };

  return (
    <>
      {/* <Header /> */}
      <div className="chatWindow"><ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="QABank"
          steps={steps}
          {...config}
        />
      </ThemeProvider></div>
      <div style={{flex:1}}>
      <header className="App-header">
      </header>
      </div>
    </>
  );
}

export default Main;
