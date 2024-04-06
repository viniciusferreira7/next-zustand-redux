import { MessageCircle } from 'lucide-react'

export function Player() {
  return (
    <div className="m-auto flex w-full max-w-6xl flex-col gap-6">
      <div className="flex w-full items-center justify-between">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
          <span className="text-sm text-zinc-400">
            Módulo &quot;Desvendando o Redux&quot;
          </span>
        </div>
        <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white duration-300 hover:bg-violet-800">
          <MessageCircle className="size-4" /> Deixar feedback
        </button>
      </div>
      <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
        <div className="flex-1">video</div>
        <aside className="border-1 h-[37.5rem] w-full max-w-80 border-zinc-800 bg-zinc-900"></aside>
      </main>
    </div>
  )
}
