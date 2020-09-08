class ActionProvider {
    constructor( createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setStateFunc = setStateFunc;
    }
}

export default ActionProvider;