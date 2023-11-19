"use client";
import CommentList from "@/components/CommentList";
import { getThreadDetail } from "@/utils/nostr";

import PageHeader from "@/components/PageHeader";
import PrimaryButton from "@/components/PrimaryButton";
import BackButton from "@/components/BackButton";

import Link from "next/link";

export default async function Thread({ params }) {
  const thread = await getThreadDetail(params.threadId);

  return (
    <main className="m-8">
      <div className="space-y-2">
        <BackButton />
        <PageHeader copy={thread.title} />
        <p className="text-base">{thread.description}</p>
        <p className="mt-4">{thread.content}</p>
      </div>

      <div className="my-4">
        <PrimaryButton
          copy="Reply to Thread"
          link={`/forum/${params.forumId}/thread/${params.threadId}/createComment/`}
        />
      </div>

      <div className="space-y-4">
        <CommentList threadId={params.threadId} />
      </div>
    </main>
  );
}
