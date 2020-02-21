import { GET_DATA, UPDATE_SMURFS, ADD_SMURF} from '../actions/index';

const initialState = {
    smurfs: [],
    name: '',
    age: '',
    height: '',
    isFetchingData: false
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true
            };
        case UPDATE_SMURFS:
            return {
                ...state,
               smurfs: action.payload,
                isFetchingData: true
            };
        case ADD_SMURF:
            return {
                ...state,
    }
        default:
            return state;
    }
};