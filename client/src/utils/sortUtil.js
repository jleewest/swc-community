//sort topics from newest to oldest (topics)
export function sortNewestFirst(list) {
  return list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}
///sort messages from oldest to newest (messages)
export function sortOldestFirst(list) {
  return list.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}
