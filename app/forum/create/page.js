"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createForum } from "@/utils/nostr";

const create = async () => {
  const router = useRouter();
  const forumId = createForum({ subject, description });
  router.push(`/forum/${forumId}`);
};

export default function CreateForum({ params }) {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="container">
      <form onSubmit={create}>
        <div className="mb-3">
          <label className="form-label">Forum Subject</label>
          <input
            type="text"
            className="form-control"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            id="forumSubject"
            aria-describedby="forumSubject"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Forum Description</label>
          <input
            type="text"
            className="form-control"
            id="forumDescription"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            aria-describedby="forumDescription"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
