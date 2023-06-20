import { getForums } from "@/utils/nostr";
import Forum from "./Forum";

const ForumList = async () => {
  let forums = [];
  await getForums(forums);

  console.log(forums);
  return (
    <div className="row">
      {forums.map((forum) => {
        console.log(forum);
        return (
          <Forum
            subject={forum.tags[0][1]}
            description={forum.tags[1][1]}
            key={forum.id}
            id={forum.id}
          />
        );
      })}
    </div>
  );
};

export default ForumList;
