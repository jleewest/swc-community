const BASE_URL = 'http://localhost:3000';

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
    const response = await fetch(`${BASE_URL}/messages/${id}/delete`, {
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
