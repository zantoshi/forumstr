"use client";
import { createComment } from "@/utils/nostr";
import Link from "next/link";
import { useRouter } from "next/navigation";

import PageHeader from "@/components/PageHeader";
import ButtonSubmit from "@/components/ButtonSubmit";
import BackButton from "@/components/BackButton";
import TextArea from "@/components/TextArea";

export default function CreateComment({ params }) {
  const router = useRouter();

  const create = async (event, threadId) => {
    event.preventDefault();
    const content = event.target.elements.content.value;
    const commentId = await createComment({ threadId, content });
    router.push(`/forum/${params.forumId}/thread/${threadId}`);
  };

  return (
    <div className="flex flex-col m-8 space-y-2">
      <div className="space-y-2 ">
        <BackButton />
        <PageHeader copy="Create a Reply" />
      </div>

      <form onSubmit={(e) => create(e, params.threadId)}>
        <div className="space-y-4">
          <TextArea copy="Comment Content" name="content" />
          <ButtonSubmit />
        </div>
      </form>
    </div>
  );
}
