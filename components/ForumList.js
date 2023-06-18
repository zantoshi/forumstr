import Forum from "./Forum";
import { getForums } from "@/utils/nostr";

const ForumList = async () => {
  const forums = await getForums();

  return (
    <>
      {forums.map((forum) => {
        console.log(forum);
        return (
          <Forum
            subject={forum.kind}
            description={forum.content}
            key={forum.id}
            id={forum.id}
          />
        );
      })}
    </>
  );
};

export default ForumList;
