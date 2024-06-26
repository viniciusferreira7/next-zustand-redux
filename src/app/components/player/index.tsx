'use client'

import { useStore } from '@/app/zustand-store'
import { MessageCircle } from 'lucide-react'
import { useEffect } from 'react'
import { Header, Module, Video } from './components'

export function Player() {
  const { load, course } = useStore()

  useEffect(() => {
    load()
  }, [])

  console.log(course)

  return (
    <div className="m-auto flex w-full max-w-6xl flex-col gap-6">
      <div className="flex w-full flex-col items-center justify-between gap-y-2 md:flex-row">
        <Header />

        <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white duration-300 hover:bg-violet-800">
          <MessageCircle className="size-4" /> Deixar feedback
        </button>
      </div>
      <main className="relative flex flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow md:flex-row md:pr-80">
        <Video />
        <aside className="border-1 divide w-full divide-y-[0.025rem] divide-zinc-950 overflow-y-scroll border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 md:absolute md:bottom-0 md:right-0 md:top-0 md:max-w-80">
          {course?.modules?.map((module, index) => (
            <Module
              key={module.id}
              moduleIndex={index}
              title={module.title}
              amountOfLesson={module.lessons.length}
            />
          ))}
        </aside>
      </main>
    </div>
  )
}
