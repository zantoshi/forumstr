import Forum from "./Forum";
import { getForums } from "@/utils/nostr";

const ForumList = async () => {
  const forums = await getForums();

  return (
    <>
      {forums.map((forum) => {
        return (
          <Forum
            subject={forum.tags[0][1]}
            description={forum.tags[1][1]}
            key={forum.id}
            id={forum.id}
          />
        );
      })}
    </>
  );
};

export default ForumList;
