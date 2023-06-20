import { getForums } from "@/utils/nostr";
import Forum from "./Forum";

const ForumList = async () => {
  let forums = [];
  await getForums(forums);

  return (
    <>
      {forums.map((forum) => {
        console.log(forum);
        let subject = forum.tags[0][1];
        let description = forum.tags[1][1];
        return (
          <Forum
            subject={subject}
            description={description}
            key={forum.id}
            id={forum.id}
          />
        );
      })}
    </>
  );
};

export default ForumList;
