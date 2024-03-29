const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getUser() {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getUserByClerkId(id) {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);
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
        clerkId: user.clerkId,
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
