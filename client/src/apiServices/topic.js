const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getTopics() {
  try {
    const response = await fetch(`${BASE_URL}/topics`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getTopicsById(id) {
  try {
    const response = await fetch(`${BASE_URL}/topics/${id}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function postTopic(topic) {
  try {
    const response = await fetch(`${BASE_URL}/topics/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: topic.title,
        body: topic.body,
        GroupId: topic.GroupId,
        UserClerkId: topic.UserClerkId,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteTopic(id) {
  try {
    const response = await fetch(`${BASE_URL}/topics/${id}/delete`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function changeTopic(topic, id) {
  try {
    const response = await fetch(`${BASE_URL}/topics/${id}/edit`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: topic.title,
        body: topic.body,
        UserClerkId: topic.UserClerkId,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
