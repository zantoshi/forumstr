"use client";
import { createThread } from "@/utils/nostr";
import Link from "next/link";

const create = async (event, forumId) => {
  event.preventDefault();
  const subject = event.target.elements.subject.value;
  const description = event.target.elements.description.value;
  const content = event.target.elements.content.value;

  const threadId = await createThread({
    forumId,
    subject,
    description,
    content,
  });
  console.log("Thread created: ", threadId);
};

export default function CreateThread({ params }) {
  return (
    <div className="container">
      <Link href={`/forum/${params.forumId}`}>
        <div className="mt-4">Back to Forum</div>
      </Link>
      <form onSubmit={(e) => create(e, params.forumId)}>
        <div className="mb-3">
          <label className="form-label">Thread Subject</label>
          <input
            type="text"
            className="form-control"
            name="subject"
            required
            id="threadSubject"
            aria-describedby="threadSubject"
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
