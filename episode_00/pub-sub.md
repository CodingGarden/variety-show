#  Pub / Sub Pattern

#### Objectives

* 📝 Define and Describe the Pub / Sub Pattern
* 🔎 Identify the 3 parts of the Pub / Sub Pattern
* 🔀 Describe how the 3 parts interact
* 🚀 Implement the Pub / Sub Pattern with Javascript

### 📝 Define and Describe the Pub / Sub Pattern

Publish-subscribe is a messaging pattern where publishers push messages to subscribers. It is a general messaging pattern that can be implemented across various programming languages, platforms and networks.

* [Publish–subscribe pattern on WikiPedia](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
* [Publish/Subscribe Pattern on Realtime API Hub](https://realtimeapi.io/hub/publishsubscribe-pattern/)
* [Pub/Sub Messaging on AWS](https://aws.amazon.com/pub-sub-messaging/)

![pub-sub](https://d1.awsstatic.com/product-marketing/Messaging/sns_img_topic.e024462ec88e79ed63d690a2eed6e050e33fb36f.png)

>[Image Source](https://aws.amazon.com/pub-sub-messaging/)

### 🔎 Identify the 3 parts of the Pub / Sub Pattern

These are three central components to understanding pub/sub messaging pattern:

1. Publisher: Publishes messages to the communication infrastructure
2. Subscriber: Subscribes to a category of messages
3. Communication infrastructure: Receives messages from publishers and maintains subscribers’ subscriptions.

>[Source](https://realtimeapi.io/hub/publishsubscribe-pattern/)

### 🔀 Describe how the 3 parts interact

Pub/Sub works like this:

* A publisher (i.e. any source of data) pushes messages out to interested subscribers (i.e. receivers of data) via live-feed data streams known as channels (or topics).
* All subscribers to a specific publisher channel are immediately notified when new messages have been published on that channel, and the message data (or payload) is received together with the notification.

>[Source](https://www.pubnub.com/learn/glossary/what-is-publish-subscribe/)

### 🚀 Implement the Pub / Sub Pattern with Javascript

* [ ] Pseudo Code Example
* [ ] Make it Work

### Libraries

* [PubSubJS](https://github.com/mroderick/PubSubJS)
* [pub-sub](https://github.com/flekschas/pub-sub)
* [aurelia-event-aggregator](https://aurelia.io/docs/api/event-aggregator/class/EventAggregator)
* [publisher.js](https://github.com/ryanflorence/publisher.js)
* [nanoevents](https://www.npmjs.com/package/nanoevents)
* [microee](https://github.com/mixu/microee)
