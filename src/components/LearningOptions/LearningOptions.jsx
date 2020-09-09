import React from 'react';
import styled from 'styled-components';

const LearningOptions = (props) => {
    const options = [
        { text: 'Javascript',
         handler: props.actionProvider.handleJavascriptList,
          id: 1},
        { text: 'Data visualization', handler: () => {}, id: 2},
        { text: 'APIs', handler: () => {}, id: 3},
        { text: 'Security', handler: () => {}, id: 4},
        { text: 'Interview prep', handler: () => {}, id: 5},
    ];

    const optionsMarkup = options.map((option) => (
        <Button 
        className="learning-options-button" 
        key={option.id} 
        onClick={option.handler}
        >
            {option.text}
        </Button>
    ));

    return <Container>{optionsMarkup}</Container>
}

export default LearningOptions;

const Button = styled.button`
    padding: 0.5rem;
    border-radius: 35px;
    background - color: transparent;
    border: 1px solid #000;
    margin: 3px;
    `;

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`;