'use client'

import { FormEvent } from 'react'

export function AddTodo() {
  function handleAddNewTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const data = Object.fromEntries(formData)
  }

  return (
    <form className="flex gap-1" onSubmit={handleAddNewTodo}>
      <div className="rounded-lg border-2 border-sky-800 p-2 duration-300 focus-within:border-sky-500">
        <input
          name="create"
          placeholder="create a new to-do"
          className="bg-transparent outline-none"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-sky-800 p-2 duration-500 hover:bg-sky-500"
      >
        Adds
      </button>
    </form>
  )
}