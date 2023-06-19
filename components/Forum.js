import Link from "next/link";
const Forum = ({ id, subject, description }) => {
  const styles = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <>
      <div style={styles} className="row p-4 mt-4">
        <h3>{subject}</h3>
        <p>{description}</p>
        <Link href={`/forum/${id}`}>View Forum</Link>
      </div>
    </>
  );
};

export default Forum;
