"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createThread } from "@/utils/nostr";

const create = async ({ forumId }) => {
  const router = useRouter();
  const threadId = createThread({ forumId, subject, description, content });
  router.push(`/forum/${{ forumId }}/thread/${threadId}`);
};

export default function CreateThread({ params }) {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="container">
      <form onSubmit={(e) => create(params.forumId)}>
        <div className="mb-3">
          <label className="form-label">Thread Subject</label>
          <input
            type="text"
            className="form-control"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
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
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            aria-describedby="threadDescription"
          />
        </div>
        <div className="mb-3">
          <label for="threadContent" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="threadContent"
            rows="3"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
