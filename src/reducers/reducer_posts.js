import { FETCH_POSTS, GET_POST } from '../actions/index';


const INITIAL_STATE = {
	all: [],
	post: null
};

export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case GET_POST:
		//Update with just the new post from API
			return { ...state, post: action.payload.data};
		case FETCH_POSTS:
	//Return current state, add 'all' as payload as a new object
			return { ...state, all: action.payload.data };

		default:
			return state;
	}
}