import { AddTodo } from './components/add-todo'
import { TodoList } from './components/todo-list'
import { ReduxProvider } from './context/redux-provider'

export default function Home() {
  return (
    <div className="grid h-screen w-full place-items-center">
      <main className="space-y-2">
        <h1 className="text-3xl font-bold">To-do list</h1>
        <ReduxProvider>
          <AddTodo />
          <TodoList />
        </ReduxProvider>
      </main>
    </div>
  )
}
