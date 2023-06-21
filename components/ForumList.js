"use client";

import { connectToRelay } from "@/utils/nostr";
import Forum from "./Forum";
import { useEffect, useState } from "react";

const ForumList = async () => {
  const [forums, setForums] = useState([]);

  useEffect(() => {
    async function getForums() {
      const relay = await connectToRelay();
      let query = { kinds: [10] };
      let sub = relay.sub([query]);
      sub.on("event", (event) => {
        if (
          event.tags[0][0] === "subject" &&
          event.tags[1][0] === "description"
        ) {
          let newList = [...forums, event];
          forums.push(event);
          setForums(newList);
        }
      });
      sub.on("eose", () => {
        sub.unsub();
        setForums(forums);
        closeConnectionToRelay(relay);
      });
    }
    getForums();
  }, []);

  return (
    <div className="row">
      {forums ? (
        forums.map((forum) => {
          console.log("Forum in the map function: ", forum);
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
