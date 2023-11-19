"use client";
import { createThread } from "@/utils/nostr";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreateThread({ params }) {
  const router = useRouter();

  const create = async (event, forumId) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const content = event.target.elements.content.value;

    const threadId = await createThread({
      forumId,
      title,
      description,
      content,
    });
    router.push(`/forum/${forumId}/thread/${threadId}`);
  };

  return (
    <div className="container">
      <Link href={`/forum/${params.forumId}`}>
        <div className="mt-4">Back to Forum</div>
      </Link>
      <form onSubmit={(e) => create(e, params.forumId)}>
        <div className="mb-3">
          <label className="form-label">Thread Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            required
            id="threadTitle"
            aria-describedby="threadTitle"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Thread Description</label>
          <input
            type="text"
            className="form-control"
            id="threadDescription"
            name="description"
            required
            aria-describedby="threadDescription"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            id="threadContent"
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
