import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
} from './types';

// функция action creator
export function incrementLikes() {
  return { type: INCREMENT };
}

export function decrementLikes() {
  return { type: DECREMENT };
}

export function inputText(text) {
  return { type: INPUT_TEXT, text };
}

export function commentCreate(text, id) {
  return { type: COMMENT_CREATE, data: { text, id } };
}

export function commentUpdate(text, id) {
  return { type: COMMENT_UPDATE, data: { text, id } };
}

export function commentDelete(id) {
  return { type: COMMENT_DELETE, id };
}

export function commentsLoad() {
  return async (dispatch) => {
    dispatch(loaderOn());
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
    const jsonData = await res.json();

    setTimeout(() => {
      dispatch({ type: COMMENTS_LOAD, data: jsonData });
      dispatch(loaderOff());
    }, 1000);
  };
}

export function loaderOn(id) {
  return { type: LOADER_DISPLAY_ON };
}

export function loaderOff(id) {
  return { type: LOADER_DISPLAY_OFF };
}
