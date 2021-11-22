import { ADD_DATA } from "../Action/type";

const initialState = {
  list : []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        list : [...action.payload]
      };

    default:
      return state;
  }
};

export default userReducer;
