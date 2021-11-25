import { useState, useEffect } from 'react';
import { commentUpdate } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const SingleComment = ({ data }) => {
  const [commentText, setCommentText] = useState('');
  const { text, id } = data;
  const dispatch = useDispatch();

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  return (
    <form action="" className="comments-item" onSubmit={handleUpdate}>
      <div className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden="hidden" />
    </form>
  );
};

export default SingleComment;
