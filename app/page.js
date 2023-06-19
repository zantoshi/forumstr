"use client";
import Link from "next/link";
import ForumList from "@/components/ForumList";

export default async function Home() {
  return (
    <main>
      <div className="container">
        <h1>Hello World</h1>
        <ForumList />
        <Link href="/forum/create/">
          <div className="mt-4">Create Forum</div>
        </Link>
      </div>
    </main>
  );
}
