import { getComments } from "@/utils/nostr";
import Comment from "./Comment";

const CommentList = async ({ threadId }) => {
  let comments = await getComments(threadId);
  console.log("Comments from commentlist: ", comments);
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
