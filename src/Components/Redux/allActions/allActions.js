import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_ELECTRONICS, TOGGLE_JEWELERY, TOGGLE_MEN, TOGGLE_WOMEN } from "../actionTypes/actionTypes"

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const removeToCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};

export const toggleWomen = (data) => {
 
  return {
    type: TOGGLE_WOMEN,
    payload: data,
  };
};
export const toggleMen = (data) => {
  return {
    type: TOGGLE_MEN,
    payload: data,
  };
};
export const toggleElectronics = (data) => {
  return {
    type: TOGGLE_ELECTRONICS,
    payload: data,
  };
};
export const toggleJewelery = (data) => {
  return {
    type: TOGGLE_JEWELERY,
    payload: data,
  };
};