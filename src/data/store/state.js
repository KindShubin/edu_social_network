import pic1 from '../wolf.jpg';
import pic2 from '../flower.jpg';
import pic3 from '../pringles.jpg';
import reducerProfile from './reducers/reducerProfile';
import reducerDialogs from './reducers/reducerDialogs';
import reducerSidebar from './reducers/reducerSidebar';


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
    sidebar: {}
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
    this._state.dialogs = reducerDialogs(this._state.dialogs, action);
    this._state.profile = reducerProfile(this._state.profile, action);
    this._state.sidebar = reducerSidebar(this._state.sidebar, action);
    this._subscriber(this._state);
  },

}

export default store;
window.store = store;