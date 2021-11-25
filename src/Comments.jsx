import SingleComment from './SingleComment';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import { commentCreate } from './redux/actions';

const Comments = () => {
  const [textComment, setTextComment] = useState('');

  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const dispatch = useDispatch();

  console.log('comments >>>', comments);

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  };

  return (
    <div className="card-comments">
      <form action="" className="comments-item-create" onSubmit={handleSubmit}>
        <input type="text" value={textComment} onChange={handleInput} />
        <input type="submit" hidden="hidden" />
      </form>
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res} />;
        })}
    </div>
  );
};

export default Comments;
