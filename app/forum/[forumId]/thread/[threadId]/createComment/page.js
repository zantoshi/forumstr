"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createComment } from "@/utils/nostr";

const create = async ({ threadId }) => {
  const router = useRouter();
  createComment({ threadId, content });
  router.refresh();
};

export default function CreateComment({ params }) {
  const [content, setContent] = useState("");

  return (
    <div className="container">
      <form onSubmit={(e) => create(params.forumId)}>
        <div className="mb-3">
          <label for="commentContent" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="commentContent"
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
