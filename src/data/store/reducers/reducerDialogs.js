const PRINT_NEW_MESSAGE_TEXT = "PRINT-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

const reducerDialogs = (state, action) => {
    switch (action.type) {
        case PRINT_NEW_MESSAGE_TEXT: {
            _printNewMessage(state, action.message);
            return state;
        }
        case ADD_MESSAGE: {
            _addMessage(state);
        }
        default: return state;
    }
}

const _addMessage = state => {
    //{ fromUser: 'Dmitriy', toUser: 'Pavel', date: '2030-12-22', message: "Ping" },
    state.messages.push({
        fromUser: "Dmitriy",
        toUser: "Valera",
        date: new Date().toString(),
        message: state.textMessage,
    });
    state.textMessage = "";
};

const _printNewMessage = (state, messageText) => {
    state.textMessage = messageText;
};

// Actions creators
export const addMessageActionCreator = () => ( {type: ADD_MESSAGE} );

export const printNewMessageActionCreator = (messageText) => ({
  type: PRINT_NEW_MESSAGE_TEXT,
  message: messageText
});

export default reducerDialogs;