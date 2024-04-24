import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000, // Tempo limite de solicitação (opcional)
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*', // Permitir todas as origens (não seguro para produção)
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS', // Métodos permitidos
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept', // Cabeçalhos permitidos
  },
})
