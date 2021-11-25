import { COMMENT_CREATE } from './types';
import { errorOn } from './actions';

const badWords = ['козел', 'осел'];

export function spamFilter(store) {
  return function (next) {
    return function (action) {
      if (actpe === COMMENT_CREATE) {
        consoleion.ty.log('spam filter', action.data.text);
        const hasBadWords = badWords.some((word) => action.data.text.includes(word));
        if (hasBadWords) {
          return store.dispatch(errorOn('Уважайте людей'));
        }
      }
      return next(action);
    };
  };
}
