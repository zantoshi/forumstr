import Link from "next/link";

import { getForumDetail, fetchThreadOrComments } from "@/utils/nostr";
import ThreadList from "@/components/ThreadList";

export default async function Forum({ params }) {
  const forumId = params.forumId;
  const forum = await getForumDetail(forumId);

  return (
    <main>
      <div className="container my-4">
        <Link href={`/`}>Back to Home</Link>
      </div>
      <div className="container my-6">
        <h3>{forum.subject}</h3>
        <p>{forum.description}</p>

        <ThreadList forumId={params.forumId} />

        <Link href={`/forum/${params.forumId}/thread/create`}>
          <div className="mt-4">Create Thread</div>
        </Link>
      </div>
    </main>
  );
}
