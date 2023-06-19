"use client";
import Thread from "../../../components/Thread";
import Link from "next/link";

import { getForumDetail, getThreads } from "@/utils/nostr";

export default async function Forum({ params }) {
  const forum = await getForumDetail(params.forumId);
  const threads = await getThreads(params.forumId);
  return (
    <main>
      <div className="container my-4">
        <Link href={`/`}>Back to Home</Link>
      </div>
      <div className="container my-6">
        <h3>{forum.subject}</h3>
        <p>{forum.description}</p>
        {threads.map((thread) => {
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
        })}
        <Link href={`/forum/${params.forumId}/thread/create`}>
          <div className="mt-4">Create Thread</div>
        </Link>
      </div>
    </main>
  );
}
