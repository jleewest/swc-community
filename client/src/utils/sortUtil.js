export default function sortTopics(topicList) {
  return topicList.sort((a, b) => new Date(b.date) - new Date(a.date));
}
