//sort topics from newest to oldest
export function sortTopics(topicList) {
  return topicList.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}
///sort messages from oldest to newest
export function sortMessages(messageList) {
  return messageList.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );
}
