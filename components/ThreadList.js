import Thread from "./Thread";
import { fetchThreadOrComments } from "@/utils/nostr";

const ThreadList = async ({ forumId }) => {
  let threads = [];
  await fetchThreadOrComments(threads, forumId, 10);
  return (
    <div className="row">
      {threads.map((thread) => {
        console.log(thread);

        const subject = thread.tags[1][1];
        const description = thread.tags[2][1];
        return (
          <Thread
            forumId={params.forumId}
            threadId={thread.id}
            subject={subject}
            description={description}
          />
        );
      })}{" "}
    </div>
  );
};

export default ThreadList;
