import Thread from "../../../components/Thread";

import { getForumDetail, getThreads } from "@/utils/nostr";

export default async function Forum({ params }) {
  const forum = await getForumDetail(params.forumId);
  const threads = await getThreads(params.forumId);
  return (
    <main>
      <div className="container">
        <h1>Forum: {forum.subject}</h1>
        <p>{forum.description}</p>
        {threads.map((thread) => {
          return (
            <Thread subject={thread.subject} description={thread.description} />
          );
        })}
      </div>
    </main>
  );
}
