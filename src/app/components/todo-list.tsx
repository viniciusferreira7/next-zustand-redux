'use client'

import { useSelector } from 'react-redux'
import { store } from '../store'

export function TodoList() {
  const todos = useSelector((store) => {
    return store.todo
  })

  console.log({ store })

  return (
    <ul className="list-inside list-disc">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.value} - {todo.id}
          </li>
        )
      })}
    </ul>
  )
}
