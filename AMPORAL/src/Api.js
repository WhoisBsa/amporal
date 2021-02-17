const BASE_URL = 'http://portal-ensino.herokuapp.com/api';

export default {
  signIn: async (username, password) => {
    const req = await fetch(`${BASE_URL}/token-request/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const json = await req.json();
    return json;
  },
};
