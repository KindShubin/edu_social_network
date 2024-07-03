import pic1 from '../../wolf.jpg';
import pic2 from '../../flower.jpg';
import pic3 from '../../pringles.jpg';

const ADD_POST = "ADD-POST";
const PRINT_NEW_POST_TEXT = "PRINT-NEW-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, pic: pic1, text: "lorem", date: new Date().toLocaleDateString(), },
    { id: 2, pic: pic2, text: "LoremLorem\nipsum\ndolor sit amet consectetur adipisicing elit. Esse exercitationem sapiente, vel possimus minus assumenda totam maiores! Nostrum expedita perspiciatis iure ea culpa magni, quis tempora nam dignissimos temporibus dolore!", date: new Date().toLocaleDateString(), },
    { id: 3, pic: pic3, text: "loremThe map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.", date: new Date().toLocaleDateString(), },
  ],
  textNewPost: "",};

function reducerProfile(state = initialState, action){

    switch (action.type) {
        case ADD_POST : {
            _addPost(state);
            return state;
        }
        case PRINT_NEW_POST_TEXT : {
            _printNewPostText(state, action.message);
            return state;
        }
        default : return state;
    }
}

const _addPost = state => {
    let indx = 0;
    state.posts.forEach((elem) => indx = elem.id > indx ? elem.id : indx);
    const obj = {
      id: indx + 1,
      pic: pic1,
      text: state.textNewPost,
    }
    state.posts.push(obj);
    state.textNewPost = "";
  };

const _printNewPostText = (state, message) => {
    state.textNewPost = message;
  };

// Action creators
export const addPostActionCreator = () => ( {type: ADD_POST} );

export const printNewPostActionCreator = (text) => ({
  type: PRINT_NEW_POST_TEXT,
  message: text,
});


export default reducerProfile;