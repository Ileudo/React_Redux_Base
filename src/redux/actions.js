import { INCREMENT, DECREMENT } from './types';

export function incrementLikes() {
  return { type: INCREMENT };
} // функция action creator

export function decrementLikes() {
  return { type: DECREMENT };
}
