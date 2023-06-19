"use client";
import { createForum } from "@/utils/nostr";
import Link from "next/link";

const create = async (event) => {
  event.preventDefault();
  const subject = event.target.elements.subject.value;
  const description = event.target.elements.description.value;
  const forumId = await createForum({ subject, description });
  console.log("forumId: ", forumId);
};

export default async function CreateForum() {
  return (
    <div className="container">
      <Link href={`/`}>
        <div className="my-4">Back</div>
      </Link>

      <form action="/" method="post" onSubmit={create}>
        <div className="mb-3">
          <label className="form-label">Forum Subject</label>
          <input
            type="text"
            className="form-control"
            id="forumSubject"
            name="subject"
            aria-describedby="forumSubject"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Forum Description</label>
          <input
            type="text"
            className="form-control"
            id="forumDescription"
            name="description"
            aria-describedby="forumDescription"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
