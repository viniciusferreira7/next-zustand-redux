'use client'

import { ChevronDown, MessageCircle, Video } from 'lucide-react'
import ReactPlayer from 'react-player'

export function Player() {
  return (
    <div className="m-auto flex w-full max-w-6xl flex-col gap-6">
      <div className="flex w-full flex-col items-center justify-between md:flex-row">
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
      <main className="relative flex flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow md:flex-row md:pr-80">
        <div className="flex-1">
          <div className="aspect-video w-full bg-zinc-950">
            <ReactPlayer
              width="100%"
              height="100%"
              controls
              url="https://www.youtube.com/watch?v=6GdPoXsUayE"
            />
          </div>
        </div>
        <aside className="border-1 divide w-full divide-y-[0.025rem] divide-zinc-950 overflow-y-scroll border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 md:absolute md:bottom-0 md:right-0 md:top-0 md:max-w-80">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="grid size-10 place-items-center rounded-full bg-zinc-950 text-xs">
                  {index + 1}
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>
                <ChevronDown className="ml-auto size-4 text-zinc-400" />
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-200">
                  <Video className="size-4 text-zinc-500 group-hover:text-zinc-200" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500 group-hover:text-zinc-200">
                    09:15
                  </span>
                </button>
                <button className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-200">
                  <Video className="size-4 text-zinc-500 group-hover:text-zinc-200" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500 group-hover:text-zinc-200">
                    09:15
                  </span>
                </button>
                <button className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-200">
                  <Video className="size-4 text-zinc-500 group-hover:text-zinc-200" />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500 group-hover:text-zinc-200">
                    09:15
                  </span>
                </button>
              </nav>
            </div>
          ))}
        </aside>
      </main>
    </div>
  )
}
