import pic1 from './wolf.jpg';
import pic2 from './flower.jpg';
import pic3 from './pringles.jpg';

const ADD_POST = "ADD-POST";
const PRINT_NEW_POST_TEXT = "PRINT-NEW-POST-TEXT";
const PRINT_NEW_MESSAGE_TEXT = "PRINT-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let store = {
  _state: {
    profile: {
      posts: [
        { id: 1, pic: pic1, text: "lorem", date: new Date().toLocaleDateString(), },
        { id: 2, pic: pic2, text: "LoremLorem\nipsum\ndolor sit amet consectetur adipisicing elit. Esse exercitationem sapiente, vel possimus minus assumenda totam maiores! Nostrum expedita perspiciatis iure ea culpa magni, quis tempora nam dignissimos temporibus dolore!", date: new Date().toLocaleDateString(), },
        { id: 3, pic: pic3, text: "loremThe map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.", date: new Date().toLocaleDateString(), },
      ],
      textNewPost: "",
    },
    dialogs: {
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
    },
  },
  _subscriber() {
    console.log('no observers now');
  },

  // management methods
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },

  // change state methods
  dispatch(action){
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "PRINT-NEW-POST-TEXT"){
      this._printNewPostText(action.message);
    } else if (action.type === "PRINT-NEW-MESSAGE-TEXT"){
      this._printNewMessage(action.message)
    } else if (action.type === "ADD-MESSAGE"){
      this._addMessage();
    }
  },

  _addPost() {
    let indx = 0;
    this._state.profile.posts.forEach((elem) => indx = elem.id > indx ? elem.id : indx);
    const obj = {
      id: indx + 1,
      pic: pic1,
      text: this._state.profile.textNewPost,
    }
    this._state.profile.posts.push(obj);
    this._state.profile.textNewPost = "";
    this._subscriber(this._state);
  },

  _printNewPostText(message) {
    this._state.profile.textNewPost = message;
    this._subscriber(this._state);
  },

  _printNewMessage(messageText){
    this._state.dialogs.textMessage = messageText;
    this._subscriber(this._state);
  },

  _addMessage() {
    //{ fromUser: 'Dmitriy', toUser: 'Pavel', date: '2030-12-22', message: "Ping" },
    this._state.dialogs.messages.push({
      fromUser: "Dmitriy",
      toUser: "Valera",
      date: new Date().toString(),
      message: this._state.dialogs.textMessage,
    });
    this._state.dialogs.textMessage = "";
    this._subscriber(this._state);
  }
}

// Action creators
export const addPostActionCreator = () => ( {type: ADD_POST} );

export const printNewPostActionCreator = (text) => ({
  type: PRINT_NEW_POST_TEXT,
  message: text,
});

export const addMessageActionCreator = () => ( {type: ADD_MESSAGE} );

export const printNewMessageActionCreator = (messageText) => ({
  type: PRINT_NEW_MESSAGE_TEXT,
  message: messageText
});

export default store;
window.store = store;