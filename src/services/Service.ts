import axios from "axios";
import Produto from "../models/Produto";
import Usuario from "../models/Usuario";
import UsuarioLogin from "../models/UsuarioLogin";

export const api = axios.create({
  baseURL: 'https://lojagamesbackend.herokuapp.com'
})

export const login = async(url: string, dados: UsuarioLogin, setDados: any) => {
  const response = await api.post(url, dados);
  setDados(response.data)
}

export const cadastrarUsuario = async(url: string, dados: Usuario, setDados: any) => {
  const response = await api.post(url, dados);
  setDados(response.data)
}

export const buscar = async(url: string, setDados: any) => {
  const response = await api.get(url)
  setDados(response.data)
}

export const buscaId = async(url: string, setDados: any) => {
  const response = await api.get(url)
  setDados(response.data)
}

export const buscaIdToken = async(url: string, setDados: any, header: any) => {
  const response = await api.get(url, header)
  setDados(response.data)
}

export const cadastrarProduto = async(url: string, dados:Produto, setDados: any, header: any ) => {
  const response = await api.post(url, dados, header)
  setDados(response.data)
}