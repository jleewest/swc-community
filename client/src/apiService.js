const BASE_URL = 'http://localhost:3000';

//FETCH USER
export async function getUsers() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function postUser(user) {
  try {
    const response = await fetch(`${BASE_URL}/users/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

//FETCH TOPIC
export async function getTopics() {
  try {
    const response = await fetch(`${BASE_URL}/topics`);
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
    const response = await fetch(`${BASE_URL}/topics/${id}`, {
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

//FETCH MESSAGE
export async function getMessages() {
  try {
    const response = await fetch(`${BASE_URL}/messages`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function postMessage(message) {
  try {
    const response = await fetch(`${BASE_URL}/messages/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: message.title,
        body: message.body,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteMessage(id) {
  try {
    const response = await fetch(`${BASE_URL}/messages/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function changeMessage(id) {
  try {
    const response = await fetch(`${BASE_URL}/messages/${id}/edit`, {
      method: 'PUT',
      //need to pass text to edit?
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body: message.body,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
