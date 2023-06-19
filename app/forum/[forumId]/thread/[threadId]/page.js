"use client";
import CommentList from "@/components/CommentList";
import { createComment, getComments, getThreadDetail } from "@/utils/nostr";
import Link from "next/link";

export default async function Thread({ params }) {
  const thread = await getThreadDetail(params.threadId);

  return (
    <main>
      <div className="container my-4">
        <Link href={`/forum/${params.forumId}/`}>Back to Forum</Link>
      </div>
      <div
        className="container"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <h3>{thread.subject}</h3>
        <p className="lead">{thread.description}</p>
        <p>Author: {thread.author}</p>

        <p className="mt-4">{thread.content}</p>
      </div>

      <CommentList threadId={params.threadId} />

      <div className="container my-4">
        <Link
          href={`/forum/${params.forumId}/thread/${params.threadId}/createComment/`}
        >
          Reply to Thread
        </Link>
      </div>
    </main>
  );
}
