'use client'

import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { v4 as uuidV4 } from 'uuid'

const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    { id: 'd226ddfd-d879-4f74-99ae-6309f1336992', value: 'teste' },
  ],
  reducers: {
    add: (state, action) => {
      state.push({ id: uuidV4(), value: action.payload })
    },
  },
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
})

export const { add } = todoSlice.actions

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
