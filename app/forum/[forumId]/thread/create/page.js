"use client";
import { createThread } from "@/utils/nostr";
import Link from "next/link";
import { useRouter } from "next/navigation";

import PageHeader from "@/components/PageHeader";
import BackButton from "@/components/BackButton";
import ButtonSubmit from "@/components/ButtonSubmit";
import TextInput from "@/components/TextInput";
import TextArea from "@/components/TextArea";

export default function CreateThread({ params }) {
  const router = useRouter();

  const create = async (event, forumId) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const content = event.target.elements.content.value;

    const threadId = await createThread({
      forumId,
      title,
      description,
      content,
    });
    router.push(`/forum/${forumId}/thread/${threadId}`);
  };

  return (
    <div className="flex flex-col m-8">
      <div className="space-y-2 mb-4">
        <BackButton />
        <PageHeader copy="Create a Thread" />
      </div>

      <form onSubmit={(e) => create(e, params.forumId)}>
        <div className="space-y-4">
          <TextInput
            copy="Thread Title"
            name="title"
            placeholder="Enter your forum title"
          />
          <TextInput
            copy="Thread Description"
            name="description"
            placeholder="Enter your forum description"
          />
          <TextArea copy="Thread Content" name="content" />

          <ButtonSubmit />
        </div>
      </form>
    </div>
  );
}
