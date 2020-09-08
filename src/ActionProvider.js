class ActionProvider {
    constructor( createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

   handleJavascriptList = () => {
       const message = this.createChatBotMessage(
           "Fantastic, I've got the following resources for you on Javascript:",
           {
               widget: "javascriptLinks",
           }
       );

       this.updateChatBotState(message);
   }

    updateChatBotState(message) {
        this.setState(prevState=> ({
            ...prevState,
                messages: [...prevState.messages, 
                    message]
        }))
    }
}

export default ActionProvider;