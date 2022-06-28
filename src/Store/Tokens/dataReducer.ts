import { Action, Teste } from "./actions"

export interface DataState {
  token: string,
  id: string,
  tipo: string,
}

export interface TesteState {
  token: string,
  id: string,
  nome: string,
  tipo: string,
  usuario: string
}

const initialState = {
  token: '',
  id: '',
  tipo: ''
}

const initialTeste = {
  id: '',
  token: '',
  nome: '',
  tipo: '',
  usuario: ''
}

export const dataReducer = (state: DataState = initialState, action: Action) => {
  switch (action.type){
    case "ADD_TOKEN": {
      return {
        token: action.payload,
        id: state.id,
        tipo: state.tipo
      }
    }
    case "ADD_ID": {
      return {
        id: action.payload,
        token: state.token,
        tipo: state.tipo
      }
    }
    case "ADD_TIPO": {
      return {
        tipo: action.payload,
        id: state.id,
        token: state.token
      }
    }

    default: return state
  }
}

export const testeReducer = (state: TesteState = initialTeste, action: Teste) => {
  switch (action.type){
    case "ADD_LOGIN": {
      return {
        id: action.payload.id,
        nome: action.payload.nome,
        tipo: action.payload.tipo,
        usuario: action.payload.usuario,
        token: action.payload.token,
      }
    }
    default: return state
  }
}