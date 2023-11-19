"use client";

import PageHeader from "@/components/PageHeader";
import PrimaryButton from "@/components/PrimaryButton";
import BackButton from "@/components/BackButton";

import { getForumDetail } from "@/utils/nostr";
import ThreadList from "@/components/ThreadList";

export default async function Forum({ params }) {
  const forumId = params.forumId;
  const forum = await getForumDetail(forumId);

  return (
    <main className="flex flex-col space-y-4 m-8">
      <div className="space-y-2">
        <BackButton />
        <PageHeader copy={forum.title} />
        <p className="text-base">{forum.description}</p>
      </div>

      <div>
        <PrimaryButton
          copy="Create Thread"
          link={`/forum/${params.forumId}/thread/create`}
        />
        <ThreadList forumId={params.forumId} />
      </div>
    </main>
  );
}
