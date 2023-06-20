const Comment = ({ comment, author }) => {
  return (
    <div class="container">
      <p class="lead">{author}</p>
      <p>{comment}</p>
    </div>
  );
};

export default Comment;
