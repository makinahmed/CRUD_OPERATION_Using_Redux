import {
  TOGGLE_ELECTRONICS,
  TOGGLE_JEWELERY,
  TOGGLE_MEN,
  TOGGLE_WOMEN,
} from "../actionTypes/actionTypes";

const initialState = {
  filter: [],
};

export const filterReducer = (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_WOMEN:
      if (state.filter.includes(action.payload)) {
        return {
          ...state,
          filter: [...state.filter.filter(item=>item !== action.payload)],
        };
      } else {
        return {
          ...state,
          filter: [...state.filter, action.payload],
        };
      }

    case TOGGLE_MEN:
      if (state.filter.includes(action.payload)) {
        return {
          ...state,
          filter: [...state.filter.filter(item=>item !== action.payload)],
        };
      } else {
        return {
          ...state,
          filter: [...state.filter, action.payload],
        };
      }
    case TOGGLE_ELECTRONICS:
      if (state.filter.includes(action.payload)) {
        return {
          ...state,
          filter: [...state.filter.filter(item=>item !== action.payload)],
        };
      } else {
        return {
          ...state,
          filter: [...state.filter, action.payload],
        };
      }
    case TOGGLE_JEWELERY:
      if (state.filter.includes(action.payload)) {
        return {
          ...state,
          filter: [...state.filter.filter(item=>item !== action.payload)],
        };
      } else {
        return {
          ...state,
          filter: [...state.filter, action.payload],
        };
      }
    default:
      return state;
  }
};
