import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from './components/LearningOptions/LearningOptions';


const config = {
    initialMessages: [
        createChatBotMessage(`Hi, I'm here to help. What do you want to learn?`, {
            widget: "learningOptions",
        })
    ],
        widgets: [
            {
                widgetName: "learningOptions",
                widgetFunc: (props) => <LearningOptions {...props} />
            }
        ]
    
    
}

export default config;