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
  const relay = relayInit("wss://nos.lol");
  relay.on("connect", () => {
    console.log(`connected to ${relay.url}`);
  });
  relay.on("error", () => {
    console.log(`failed to connect to ${relay.url}`);
  });

  await relay.connect();
  return relay;
};

export const closeConnectionToRelay = async (relay) => {
  await relay.close();
};

export const getForums = async () => {
  const relay = await connectToRelay();

  let events = [
    await relay.get({
      ids: ["52016814e8cbe714c47b76a5bea8876ce2c416a0f6f2eca20785d9460a6c292f"],
    }),
  ];
  await closeConnectionToRelay(relay);

  return events;
};

export const getForumDetail = async (forumId) => {
  const relay = await connectToRelay();

  let event = await relay.get({
    ids: [forumId],
  });

  await closeConnectionToRelay(relay);

  let forumDetail = {
    subject: event.tags[0][1],
    description: event.tags[1][1],
  };

  return forumDetail;
};

export const getThreads = async (forumId) => {
  const relay = await connectToRelay();

  let events = [await relay.get({ "#e": [forumId], kinds: [10] })];
  await closeConnectionToRelay(relay);

  return events;
};

export const getThreadDetail = async (threadId) => {
  const relay = await connectToRelay();

  let event = await relay.get({
    ids: [threadId],
  });

  await closeConnectionToRelay(relay);

  let threadDetail = {
    subject: event.tags[1][1],
    description: event.tags[2][1],
    content: event.content,
    author: event.pubkey,
  };

  return threadDetail;
};

export const getComments = async (threadId) => {
  const relay = await connectToRelay();

  let events = [await relay.get({ "#e": [threadId], kinds: [11] })];
  await closeConnectionToRelay(relay);

  return events;
};

export let createForum = async ({ subject, description }) => {
  const relay = await connectToRelay();

  let event = {
    pubkey: pk,
    created_at: Math.floor(Date.now() / 1000),
    kind: 9,
    tags: [
      ["subject", subject],
      ["description", description],
    ],
    content: "",
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

  await closeConnectionToRelay(relay);
  return event.id;
};

export let createThread = async ({
  forumId,
  subject,
  description,
  content,
}) => {
  const relay = await connectToRelay();

  let event = {
    pubkey: pk,
    created_at: Math.floor(Date.now() / 1000),
    kind: 10,
    tags: [
      ["e", forumId],
      ["subject", subject],
      ["description", description],
    ],
    content: content,
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

  await closeConnectionToRelay(relay);

  return event.id;
};

export let createComment = async ({ threadId, content }) => {
  const relay = await connectToRelay();

  let event = {
    pubkey: pk,
    created_at: Math.floor(Date.now() / 1000),
    kind: 11,
    tags: [["e", threadId]],
    content: content,
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

  await closeConnectionToRelay(relay);

  return event.id;
};
