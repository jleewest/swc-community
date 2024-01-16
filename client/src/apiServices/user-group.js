const BASE_URL = 'http://localhost:3000';

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
    console.log(body);
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

export async function deleteGroupFromUser(id) {
  try {
    const response = await fetch(`${BASE_URL}/user-group/${id}/delete`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
