import { INCREMENT, DECREMENT } from './types';

const initialState = {
  likes: 0,
};

export const likesReducer = (state = initialState, action) => {
  // console.log('likesReducer >', action);

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1,
      }; // делаем копию согласно принципу иммутабельности of state

    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1,
      };

    default:
      return state;
  }
};
