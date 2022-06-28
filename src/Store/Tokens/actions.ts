export type Action = {
  type: 'ADD_TOKEN' | 'ADD_ID' | 'ADD_TIPO';
  payload: string;
};

export const addToken = (token: string): Action => ({
  type: 'ADD_TOKEN',
  payload: token,
});

export const addId = (id: string): Action => ({
  type: 'ADD_ID',
  payload: id,
});

export const addTipo = (tipo: string): Action => ({
  type: 'ADD_TIPO',
  payload: tipo,
});

export type Teste = {
  type: 'ADD_LOGIN';
  payload: {
    id: string;
    nome: string;
    tipo: string;
    usuario: string;
    token: string;
  };
};

export const addLogin = (login: {}): Teste => ({
  type: 'ADD_LOGIN',
  payload: { id: '', nome: '', tipo: '', token: '', usuario: '' },
});
