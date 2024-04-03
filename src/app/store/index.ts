'use client'

import { configureStore, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidV4 } from 'uuid'

const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    { id: uuidV4(), value: 'Terminar as duas horas de estudo' },
    { id: uuidV4(), value: 'Fazer o cardio' },
  ],
  reducers: {},
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
})
