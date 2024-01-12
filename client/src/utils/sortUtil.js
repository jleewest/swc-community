export default function sortTopics(topicList) {
  return topicList.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
}
