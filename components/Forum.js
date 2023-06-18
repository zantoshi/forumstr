const Forum = ({ subject, description }) => {
  return (
    <div className="row">
      <h3>{subject}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Forum;
