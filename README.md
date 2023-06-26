## Forumstr: A Proof of Concept Forum Built Over nostr

### Problem

In addition to all of the problems outlined in the [original nostr spec](https://github.com/nostr-protocol/nostr), we can now allow users to self-select and discovery new communities similar to reddit, phpBB, or vBulletin; accommodating a new social app type that users love: Forums. 

### Vision

We can rebuild the internet that was in my opinion great and solve a lot of the old problems that existed with these forums.

### Goal

Make the internet feel fun and free again, inspire curiosity and action, and new communities possible.

### Current Features

You can try it out at [forumstr.lol](https://forumstr.lol) . Right now it just a proof-of-concept (PoC).

- Single Relay
- Forum Event Definition
- Thread Event Definition
- Comment Definition
- Creating
- Reading

### Goal MVP Spec

- New Events
    - Events are super flexible allowing for iterative development starting simple and gradually building out more sophisticated functionality.
    - Build their own aggregated “Reddit” with the forums and communities they most care about.
        - Just like a user can create an event for preferred relays, they can do the same for preferred forums.
    - Can use events to create subscriptions to specific forums and notify based on threads or new posts or certain from authors.
        - Similar to RSS.
- Using Zaps we can prioritize content based on a combination of factors:
    - earn from your creations and support other high signal creators.
    - scarce and limited money rather than hidden algorithms we don’t have any insight into how they work to prioritize content
    - ignore ads because you can use any forum app of your choosing, all of which follows the same spec more or less, allowing for multiple monetization models to be experimented with.
    - activity data such as the latest post, number of posts, etc.
    - aggregated zaps by user on the platform to determine reputation, along with a points event that can be positive or negative.
- Followings can be brought with them since the user can set their preferred relay, so even if they are banned from a forum, they can still be found and be seen in other nostr forum apps. This will allow putting the user in control of who they care to interact with and see. Possibly their own curated block or mute lists.
- Badges
    - We can use this to allow users to take their reputation with them and proudly display it on their profile if they so choose on multiple platforms.
    - Use badges + encrypted messages to grant access to special forums.
    - Access management such as enabling content moderators for specific forums.
- Relays
    - Relays can be federated by forum community owner, or if they are advanced, they can send the events to the relays they wish to participate with for redundancy / resiliency and the user can save a copy of all the data to their own relay if they so choose.
- Make data accessible
    - Nostr relays can charge a fee for access of data priced in satoshis allowing for the fetching of data as a subscription (monthly / yearly), pay-per-use using LNURL withdrawals so the user don’t incur mental transaction costs, life-time membership  for a single payment as a member, or allow data to be accessed for free. Sophisticated users could even send every event they fetch and create to their own relay so they can have all their data widely accessible. Nostr relay business models can also be experimented with to see what works for what user personas.
- Enable multiple forum apps to be built all following the same spec.
    - This is the beauty of open networks and protocols. Apps like Apollo will never run into the Reddit issue ever again. They can start building and testing things right now while running their own relay and connecting to other relays without concern since there isn’t a central party making pricing decisions that can destroy your business.
    
### Event Structures:

#### Forums
```
  let Forum = {
    pubkey: "forumCreator",
    created_at: Math.floor(Date.now() / 1000),
    kind: 10,
    tags: [
        ["subject", "Forum Title"],
        ["description", "Forum Description"]
    ],
    // empty
    content: "",
    id = eventId;
    sig = signature;
  };
```

#### Threads
```
  let Thread = {
    pubkey: "threadCreator",
    created_at: Math.floor(Date.now() / 1000),
    kind: 11,
    tags: [
        ["e", forumEventId]
        ["subject", "Thread Title"],
        ["description", "Thread Description"]
    ],
    // text note
    content: "Thread content",
    id = eventId;
    sig = signature;
  };
```

#### Comments
```
  let Comment = {
    pubkey: "commentCreator",
    created_at: Math.floor(Date.now() / 1000),
    kind: 12,
    tags: [
        ["e", threadEventId]
    ],
    // text note
    content: "Comment content",
    id = eventId;
    sig = signature;
  };
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

