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

  signUp: async (username, email, password) => {
    const req = await fetch(`${BASE_URL}/user/new/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const json = await req.json();
    return json;
  },
  getUserData: async (token) => {
    const req = await fetch(`${BASE_URL}/user/get/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `token ${token}`,
      },
    });
    const json = await req.json();
    return json;
  },
  updateUserData: async (
    token,
    username,
    first_name,
    last_name,
    bio,
    instituicao,
    data_nascimento,
  ) => {
    const req = await fetch(`${BASE_URL}/user/put/`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `token ${token}`,
      },
      body: JSON.stringify({
        username,
        first_name,
        last_name,
        bio,
        instituicao,
        data_nascimento,
      }),
    });
    const json = await req.json();
    return json;
  },
  getComments: async (token) => {
    const req = await fetch(`${BASE_URL}/comentario/get/all/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `token ${token}`,
      },
    });
    const json = await req.json();
    return json;
  },
  getExercicios: async (token) => {
    const req = await fetch(`${BASE_URL}/exercicio/get/all/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `token ${token}`,
      },
    });
    const json = await req.json();
    return json;
  },
  sendAnswers: async (token, answers) => {
    console.log('====================================');
    console.log('Na api: ' + JSON.stringify(answers));
    console.log('====================================');
    const req = await fetch(`${BASE_URL}/exercicio/post/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `token ${token}`,
      },
      body: [
        {
          "id": 2,
          "resposta": answers[0]
        },
        {
          "id": 3,
          "resposta": answers[1]
        },
        {
          "id": 4,
          "resposta": answers[2]
        }
      ],
    });
    const json = await req.json();
    return json;
  }
};
