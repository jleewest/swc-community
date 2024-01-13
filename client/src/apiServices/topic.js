const BASE_URL = 'http://localhost:3000';

export async function getTopics() {
  try {
    const response = await fetch(`${BASE_URL}/topics`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getTopicById(id) {
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

export async function changeTopic(id) {
  try {
    const response = await fetch(`${BASE_URL}/topics/${id}/edit`, {
      method: 'PUT',
      //need to pass text to edit?
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: topic.title,
        body: topic.body,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
