import { fetchThreadOrComments } from "@/utils/nostr";
import Comment from "./Comment";

const CommentList = async ({ threadId }) => {
  let comments = [];
  await fetchThreadOrComments(comments, threadId, 11);
  return (
    <div className="row">
      {comments.map((comment) => {
        console.log(comment);
        return (
          <Comment
            comment={comment.content}
            author={comment.pubkey}
            key={comment.id}
          />
        );
      })}
    </div>
  );
};

export default CommentList;
