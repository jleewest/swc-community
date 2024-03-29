const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getGroups() {
  try {
    const response = await fetch(`${BASE_URL}/groups`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getGroupById(id) {
  try {
    const response = await fetch(`${BASE_URL}/groups/${id}`);
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
