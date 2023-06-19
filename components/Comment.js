const Comment = ({ comment, author }) => {
  return (
    <div>
      <p class="lead">Author: {author}</p>
      <p>{comment}</p>
    </div>
  );
};

export default Comment;
