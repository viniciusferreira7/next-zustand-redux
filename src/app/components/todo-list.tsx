'use client'

import { useState } from 'react'
import { useAppSelector } from '../store'
import { IconCopy } from './ui/Icon-copy'

export function TodoList() {
  const [copiedId, setCopiedId] = useState('')

  const todos = useAppSelector((store) => {
    return store.todo
  })

  function handleCopyId(id: string) {
    setCopiedId(id)
    navigator.clipboard.writeText(id)
  }

  return (
    <ul className="list-inside list-disc">
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="flex gap-1">
            <div
              className="flex items-center gap-2 text-xs duration-150"
              onClick={() => handleCopyId(todo.id)}
            >
              <IconCopy id={todo.id as string} copiedId={copiedId} />
              <p className="w-20 truncate">{todo.id}</p>
            </div>
            <p> - {todo.value}</p>
          </li>
        )
      })}
    </ul>
  )
}
