"use client";
import { createComment } from "@/utils/nostr";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateComment({ params }) {
  const router = useRouter();

  const create = async (event, threadId) => {
    event.preventDefault();
    const content = event.target.elements.content.value;
    const commentId = await createComment({ threadId, content });
    router.push(`/forum/${params.forumId}/thread/${threadId}`);
  };

  return (
    <div className="container">
      <Link href={`/forum/${params.forumId}/thread/${params.threadId}/`}>
        Back to Thread
      </Link>

      <form onSubmit={(e) => create(e, params.threadId)}>
        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea
            className="form-control"
            id="commentContent"
            rows="3"
            name="content"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
