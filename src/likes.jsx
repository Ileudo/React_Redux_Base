import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from './redux/actions';

const Likes = (props) => {
  console.log('render >', props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
};

// пробрасываем выборочные свойства из хранилища
function mapStateToProps(state) {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
}

// пробрасываем методы
function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => dispatch(incrementLikes()),
    onDecrementLikes: () => dispatch(decrementLikes()),
  };
}

// подсоединяем компонент к redux с помощью специальной функции connect
export default connect(mapStateToProps, mapDispatchToProps)(Likes);
