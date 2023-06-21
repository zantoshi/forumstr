const Comment = ({ comment, author }) => {
  return (
    <>
      <p className="lead">{author}</p>
      <p>{comment}</p>
    </>
  );
};

export default Comment;
