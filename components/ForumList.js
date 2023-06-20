"use client";
import Forum from "./Forum";

const ForumList = async ({ forums }) => {
  return (
    <>
      {forums.map((forum) => {
        try {
          return (
            <Forum
              subject={forum.tags[0][1]}
              description={forum.tags[1][1]}
              key={forum.id}
              id={forum.id}
            />
          );
        } catch (err) {
          console.log("error: ", err);
        }
      })}
    </>
  );
};

export default ForumList;
