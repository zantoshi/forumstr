const Forum = ({ id, subject, description }) => {
  const styles = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <a href={`/forum/${id}`}>
        <div style={styles} className="row">
          <h3>{subject}</h3>
          <p>{description}</p>
        </div>
      </a>
    </>
  );
};

export default Forum;
