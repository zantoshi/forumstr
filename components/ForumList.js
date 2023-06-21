"use client";

import { connectToRelay } from "@/utils/nostr";
import Forum from "./Forum";
import { useEffect, useState } from "react";

const ForumList = async () => {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    async function getForums() {
      const relay = await connectToRelay();
      let query = { kinds: [9] };
      let sub = relay.sub([query]);
      sub.on("event", (event) => {
        if (
          event.tags[0][0] === "subject" &&
          event.tags[1][0] === "description"
        ) {
          forums.push(event);
          setForums(forums);
        }
      });
      sub.on("eose", () => {
        sub.unsub();
      });
    }
    getForums();
  }, []);

  return (
    <div className="row">
      {forums ? (
        forums.map((forum) => {
          console.log(forum);
          return (
            <Forum
              subject={forum.tags[0][1]}
              description={forum.tags[1][1]}
              key={forum.id}
              id={forum.id}
            />
          );
        })
      ) : (
        <p>Loading forums... </p>
      )}
    </div>
  );
};

export default ForumList;
