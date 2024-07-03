const PRINT_NEW_MESSAGE_TEXT = "PRINT-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

const initialState = {
    contacts: {
      users: [
        { id: 1, name: 'Valera', avatar: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg' },
        { id: 2, name: 'Sveta', avatar: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833546.jpg' },
        { id: 3, name: 'Mark', avatar: 'https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833562.jpg' },
        { id: 4, name: 'Pavel', avatar: 'https://w7.pngwing.com/pngs/855/991/png-transparent-poker-face-blank-expression-know-your-meme-mr-bean-game-white-face.png' },
        { id: 5, name: 'Mask', avatar: 'https://trueua.info/upload/store/News/News33092/f78201.jpeg' },
      ],
      me: { id: 1, name: 'Dmitriy', avatar: 'https://t3.ftcdn.net/jpg/01/21/64/88/360_F_121648819_ZQ0tZ6tjLzxim1SG7CQ86raBw4sglCzB.jpg' }
    },
    messages: [
      { fromUser: 'Pavel', toUser: 'Dmitriy', date: new Date().toLocaleDateString(), message: "LoremLorem ipsum dolor sit amet consectetur adipisicing elit. Esse exercitationem sapiente, vel possimus minus assumenda totam maiores! Nostrum expedita perspiciatis iure ea culpa magni, quis tempora nam dignissimos temporibus dolore!" },
      { fromUser: 'Dmitriy', toUser: 'Pavel', date: '2030-12-22', message: "Ping" },
      { fromUser: 'Pavel', toUser: 'Dmitriy', date: '2030-12-22', message: "P0ng" },
      { fromUser: 'Dmitriy', toUser: 'Pavel', date: '2020-12-22', message: "t consectetur adipisicing elit. Esse exercitationem sapiente, vel possimus m" },
    ],
    textMessage: "",
  };

const reducerDialogs = (state = initialState, action) => {
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

//const _formatDate

// Actions creators
export const addMessageActionCreator = () => ( {type: ADD_MESSAGE} );

export const printNewMessageActionCreator = (messageText) => ({
  type: PRINT_NEW_MESSAGE_TEXT,
  message: messageText
});

export default reducerDialogs;