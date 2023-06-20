"use client";
import Link from "next/link";
import ForumList from "@/components/ForumList";
import { getForums } from "@/utils/nostr";

export default async function Home() {
  const forums = [];
  await getForums(forums);

  return (
    <main>
      <div className="container">
        <h1>Welcome to forumstr</h1>
        <p>An PoC implementation of nostr forums.</p>
        <ForumList forums={forums} />
        <Link href="/forum/create/">
          <div className="mt-4">Create Forum</div>
        </Link>
      </div>
    </main>
  );
}
