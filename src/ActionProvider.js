class ActionProvider {
    constructor( createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet(){
        const greetingMessage = this.createChatBotMessage("Hi, friend.")
        this.updateChatBotState(greetingMessage)
    }

    updateChatBotState(message) {
        this.setState(prevState=> ({
            ...prevState,
                messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;