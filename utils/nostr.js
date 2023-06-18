import {
  relayInit,
  generatePrivateKey,
  getPublicKey,
  getEventHash,
  getSignature,
} from "nostr-tools";

let sk = generatePrivateKey(); // `sk` is a hex string
let pk = getPublicKey(sk); // `pk` is a hex string

export const connectToRelay = async () => {
  const relay = relayInit("wss://relay.damus.io");

  relay.on("connect", () => {
    console.log(`connected to ${relay.url}`);
  });
  relay.on("error", () => {
    console.log(`failed to connect to ${relay.url}`);
  });

  relay.connect();
  return relay;
};

export const closeConnectionToRelay = async (relay) => {
  relay.close();
};

export const getForums = async () => {
  const relay = relayInit("wss://relay.damus.io");

  relay.on("connect", () => {
    console.log(`connected to ${relay.url}`);
  });
  relay.on("error", () => {
    console.log(`failed to connect to ${relay.url}`);
  });

  relay.connect();
  console.log("Relay connected. Getting event.");

  let sub = relay.sub([
    {
      ids: ["d7dd5eb3ab747e16f8d0212d53032ea2a7cadef53837e5a6c66d42849fcb9027"],
    },
  ]);

  sub.on("event", (event) => {
    console.log("we got the event we wanted:", event);
    let forums = event;
  });

  sub.on("eose", () => {
    sub.unsub();
  });

  relay.close();
  return forums;
};

export const getForumDetail = async ({ forumId }) => {
  const relay = connectToRelay();

  let sub = relay.sub([
    {
      // this will be hardcoded for now
      ids: [forumId],
    },
  ]);
  sub.on("event", (event) => {
    console.log("we got the event we wanted:", event);
  });
  sub.on("eose", () => {
    sub.unsub();
  });
  closeConnectionToRelay(relay);
  console.log(sub);
};

export const getThreads = async ({ forumId }) => {
  const relay = connectToRelay();

  let sub = relay.sub([
    {
      kinds: [10],
      ids: [{ forumId }],
    },
  ]);
  sub.on("event", (event) => {
    console.log("we got the event we wanted:", event);
  });
  sub.on("eose", () => {
    sub.unsub();
  });

  closeConnectionToRelay(relay);
  console.log(sub);
};

export const getThreadAndComments = async ({ threadId }) => {
  const relay = connectToRelay();

  let sub = relay.sub([
    {
      kinds: [10, 11],
      ids: [{ threadId }],
    },
  ]);
  sub.on("event", (event) => {
    console.log("we got the event we wanted:", event);
  });
  sub.on("eose", () => {
    sub.unsub();
  });
  closeConnectionToRelay(relay);
  console.log(sub);
};

export let createForum = async ({ subject, description }) => {
  const relay = connectToRelay();

  let event = {
    kind: 9,
    pubkey: pk,
    created_at: Math.floor(Date.now() / 1000),
    tags: [
      ["subject", { subject }],
      ["description", { description }],
    ],
    content: { content },
  };

  event.id = getEventHash(event);
  event.sig = getSignature(event, sk);

  let pub = relay.publish(event);
  pub.on("ok", () => {
    console.log(`${relay.url} has accepted our event`);
  });
  pub.on("failed", (reason) => {
    console.log(`failed to publish to ${relay.url}: ${reason}`);
  });

  closeConnectionToRelay(relay);
};

export let createThread = async ({
  forumId,
  subject,
  description,
  content,
}) => {
  const relay = connectToRelay();

  let event = {
    kind: 10,
    pubkey: pk,
    created_at: Math.floor(Date.now() / 1000),
    tags: [
      ["e", { forumId }],
      ["subject", { subject }],
      ["description", { description }],
    ],
    content: { content },
  };

  event.id = getEventHash(event);
  event.sig = getSignature(event, sk);

  let pub = relay.publish(event);
  pub.on("ok", () => {
    console.log(`${relay.url} has accepted our event`);
  });
  pub.on("failed", (reason) => {
    console.log(`failed to publish to ${relay.url}: ${reason}`);
  });

  closeConnectionToRelay(relay);
};

export let createComment = async ({ threadId, content }) => {
  const relay = connectToRelay();

  let event = {
    kind: 11,
    pubkey: pk,
    created_at: Math.floor(Date.now() / 1000),
    tags: [["e", { threadId }]],
    content: { content },
  };

  event.id = getEventHash(event);
  event.sig = getSignature(event, sk);

  let pub = relay.publish(event);
  pub.on("ok", () => {
    console.log(`${relay.url} has accepted our event`);
  });
  pub.on("failed", (reason) => {
    console.log(`failed to publish to ${relay.url}: ${reason}`);
  });

  closeConnectionToRelay(relay);
};
