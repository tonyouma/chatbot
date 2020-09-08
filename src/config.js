import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from './components/LearningOptions/LearningOptions';
import LinkList from './components/LearningOptions/LinkList/LinkList';


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
            },
            {
                widgetName: "javacriptLinks",
                widgetFunc: (props) => <LinkList {...props} />
            }
        ]
    
    
}

export default config;