import { fetchThreadOrComments } from "@/utils/nostr";
import Comment from "./Comment";

const CommentList = async ({ threadId }) => {
  let comments = [];
  await fetchThreadOrComments(comments, threadId, 11);
  if (comments[0]) {
    return (
      <>
        {comments.map((comment) => {
          return (
            <Comment
              comment={comment.content}
              author={comment.pubkey}
              key={comment.id}
            />
          );
        })}
      </>
    );
  }
};

export default CommentList;
