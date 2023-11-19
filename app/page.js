import ForumList from "@/components/ForumList";
import PageHeader from "@/components/PageHeader";
import PrimaryButton from "@/components/PrimaryButton";

export default async function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="space-y-2 m-4">
          <PageHeader copy="Welcome to forumstr" />
          <p className="text-base">An PoC implementation of nostr forums.</p>
          <PrimaryButton copy="Create Forum" link="/forum/create" />
        </div>

        <ForumList />
      </div>
    </main>
  );
}
