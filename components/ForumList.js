import { getForums } from "@/utils/nostr";
import Forum from "./Forum";

const ForumList = async () => {
  let forums = [];
  await getForums(forums);

  return (
    <>
      {forums.map((forum) => {
        try {
          console.log(forum);
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
