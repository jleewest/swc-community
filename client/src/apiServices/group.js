const BASE_URL = 'http://localhost:3000';

export async function getGroups() {
  try {
    const response = await fetch(`${BASE_URL}/groups`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function postGroup(group) {
  try {
    const response = await fetch(`${BASE_URL}/groups/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        img: group.img,
        title: group.title,
        body: group.body,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
