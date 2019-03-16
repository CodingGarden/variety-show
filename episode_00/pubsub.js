function createChannel() {
  const subscribers = {};

  const subscribe = (name, fn) => {
    subscribers[name] = subscribers[name] || [];
    subscribers[name].push(fn);
  };

  const publish = (name, payload) => {
    if (Array.isArray(subscribers[name])) {
      subscribers[name].forEach(fn => fn(payload));
    }
  };

  return {
    subscribe,
    publish
  };
}

const channel = createChannel();

channel.subscribe('message', (message) => {
  console.log('received message:', message);
});

channel.subscribe('data', (data) => {
  console.log('received data:', data);
});

module.exports = channel;

