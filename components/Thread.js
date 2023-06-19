import Link from "next/link";
import React from "react";

const Thread = ({ forumId, threadId, subject, description }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
      }}
      className="mt-4 p-4"
    >
      <h3>{subject}</h3>
      <p>{description}</p>
      <Link href={`/forum/${forumId}/thread/${threadId}/`}>View Thread</Link>
    </div>
  );
};

export default Thread;
