"use client";

import Forum from "./Forum";
import { getForums } from "@/utils/nostr";

const ForumList = async () => {
  const forums = await getForums();
  console.log("printing forums await variable", forums);
  return (
    <>
      {forums.map((forum) => {
        return <Forum subject={forum.subject} description={forum.subject} />;
      })}
    </>
  );
};

export default ForumList;
