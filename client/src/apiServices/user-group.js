const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getGroupsByClerkId(id) {
  try {
    const response = await fetch(`${BASE_URL}/user-group/${id}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function postGroupToUser(body) {
  try {
    const response = await fetch(`${BASE_URL}/user-group/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ClerkId: body.ClerkId,
        GroupId: body.GroupId,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteGroupFromUser(body) {
  try {
    const response = await fetch(`${BASE_URL}/user-group/delete`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ClerkId: body.ClerkId,
        GroupId: body.GroupId,
      }),
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
