import pic1 from '../../wolf.jpg';

const ADD_POST = "ADD-POST";
const PRINT_NEW_POST_TEXT = "PRINT-NEW-POST-TEXT";

function reducerProfile(state, action){

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