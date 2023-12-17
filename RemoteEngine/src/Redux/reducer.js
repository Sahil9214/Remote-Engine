import {
  CLIENT_ERROR,
  CLIENT_LOADING,
  CLIENT_SUCCESS,
  DEVELOPER_ERROR,
  DEVELOPER_LOADING,
  DEVELOPER_SUCCESS,
} from "./action.type";

const initialState = {
  isLoading: false,
  isAuth: true,
  isError: false,
  data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLIENT_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CLIENT_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case CLIENT_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
    case DEVELOPER_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DEVELOPER_SUCCESS: {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    case DEVELOPER_ERROR: {
      return {
        ...state,
        isError: true,
      };
    }
  }
};
