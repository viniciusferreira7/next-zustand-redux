'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import * as Collapsible from '@radix-ui/react-collapsible'

import { useStore } from '@/app/zustand-store'
import { ChevronDown } from 'lucide-react'
import { Lesson } from '../ui'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLesson: number
}

export function Module({ moduleIndex, title, amountOfLesson }: ModuleProps) {
  const [parent] = useAutoAnimate()
  const { currentModuleIndex, currentLessonIndex, play } = useStore((store) => {
    return {
      currentModuleIndex: store.currentModuleIndex,
      currentLessonIndex: store.currentLessonIndex,
      play: store.play,
    }
  })

  const lessons = useStore((state) => {
    return state.course?.modules[moduleIndex].lessons
  })

  return (
    <Collapsible.Root
      className="group"
      defaultOpen={currentModuleIndex === moduleIndex}
    >
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="grid size-10 place-items-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLesson} aulas</span>
        </div>
        <ChevronDown className="ml-auto size-4 text-zinc-400 transition-transform group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>
      <Collapsible.Content ref={parent} className="transition-transform">
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons?.map((lesson, index) => {
            const isCurrent =
              currentModuleIndex === moduleIndex && currentLessonIndex === index

            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                duration={lesson.duration}
                isCurrent={isCurrent}
                onPlay={() => play([moduleIndex, index])}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
