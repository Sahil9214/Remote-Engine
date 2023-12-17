import {
  CLIENT_ERROR,
  CLIENT_LOADING,
  CLIENT_SUCCESS,
  DEVELOPER_ERROR,
  DEVELOPER_LOADING,
  DEVELOPER_SUCCESS,
} from "./action.type";
import axios from "axios";
//Client Signup
export const actionClient = (payload) => async (dispatch) => {
  dispatch({ type: CLIENT_LOADING });
  try {
    await axios.post(`https://reqres.in/api/register`, payload);
    dispatch({ type: CLIENT_SUCCESS });
  } catch (err) {
    dispatch({ type: CLIENT_ERROR });
  }
};
//Developer Signup
export const actionDeveloperSignup = (obj) => async () => {
  dispatch({ type: DEVELOPER_LOADING });
  try {
    let res = await axios.post(
      `https://backendapp-ptsw.onrender.com/developers/signup`,
      obj
    );
    dispatch({ type: DEVELOPER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: DEVELOPER_ERROR });
  }
};
//Developer Login
export const actionDeveloperLogin = () => async () => {
  dispatch({ type: DEVELOPER_LOADING });
  try {
    let res = await axios.post(
      `https://backendapp-ptsw.onrender.com/developers/login`
    );
  } catch (err) {
    dispatch({ type: DEVELOPER_ERROR });
  }
};

//Developer GET;
