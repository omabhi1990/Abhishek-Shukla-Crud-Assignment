import { ADD_DATA } from "./type";

export const setData = data => dispatch => {
  dispatch({
    type: ADD_DATA,
    payload: data
  });
};