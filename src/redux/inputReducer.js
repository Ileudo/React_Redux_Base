import { INPUT_TEXT } from './types';

const initialState = {
  text: '0',
};

export const inputReducer = (state = initialState, action) => {
  console.log('inputReducer >', action);

  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.text,
      }; // делаем копию согласно принципу иммутабельности of state

    default:
      return state;
  }
};
