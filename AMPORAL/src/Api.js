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
    const req = await fetch(`${BASE_URL}/exercicio/post/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `token ${token}`,
      },
      body: JSON.stringify([
        {
          id: 2,
          resposta: answers[0]
        },
        {
          id: 3,
          resposta: answers[1]
        },
        {
          id: 4,
          resposta: answers[2]
        }
      ])
    });
    const json = await req.json();
    return json;
  },
  nextClass: async (token) => {
    await fetch(`${BASE_URL}/aula/proxima/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `token ${token}`,
      },
    });
  },
  previousClass: async (token) => {
    await fetch(`${BASE_URL}/aula/anterior/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `token ${token}`,
      },
    });
  },
  getClass: async (token) => {
    const req = await fetch(`${BASE_URL}/aula/get/`, {
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
};
