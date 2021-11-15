import { connect } from 'react-redux';

const Likes = (props) => {
  console.log('render >', props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button onClick={props.onDecrementLikes}>Dislike</button>
    </div>
  );
};

// получаем доступ к глобальному объекту state в redux через вспомогательную функцию
function mapStateToProps(state) {
  console.log('mapStateToProps >', state);
  return {
    likes: state.likes,
  };
}

// получаем доступ к глобальному объекту state в redux через вспомогательную функцию
function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      console.log('click > increment');
      const action = { type: 'INCREMENT' }; // создаем action
      dispatch(action); // передаем action в reducer
    },
    onDecrementLikes: () => {
      console.log('click > decrement');
      const action = { type: 'DECREMENT' }; // создаем action
      dispatch(action); // передаем action в reducer
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
