"use client";

import { connectToRelay } from "@/utils/nostr";
import Comment from "./Comment";
import { useEffect, useState } from "react";

const CommentList = async ({ threadId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      const relay = await connectToRelay();
      let query = { kinds: [11], "#e": [threadId] };
      let sub = relay.sub([query]);
      sub.on("event", (event) => {
        let newList = [...comments, event];
        setComments(newList);
        comments.push(event);
      });
      sub.on("eose", () => {
        sub.unsub();
        setComments(comments);
        closeConnectionToRelay(relay);
      });
    }
    getComments();
  }, []);
  return (
    <div className="row">
      {comments ? (
        comments.map((comment) => {
          return (
            <Comment
              comment={comment.content}
              author={comment.pubkey}
              key={comment.id}
            />
          );
        })
      ) : (
        <p>No comments... </p>
      )}
    </div>
  );
};

export default CommentList;
