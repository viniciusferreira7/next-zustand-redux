'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { useAutoAnimate } from '@formkit/auto-animate/react'

import { ChevronDown } from 'lucide-react'
import { Lesson } from '../ui'
import { useAppSelector } from '@/app/store'
import { play } from '@/app/store/slices/player'
import { useDispatch } from 'react-redux'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLesson: number
}

export function Module({ moduleIndex, title, amountOfLesson }: ModuleProps) {
  const [parent] = useAutoAnimate()
  const dispatch = useDispatch()

  const { currentModuleIndex, currentLessonIndex } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    return { currentModuleIndex, currentLessonIndex }
  })

  const lessons = useAppSelector((state) => {
    return state.player.course.modules[moduleIndex].lessons
  })

  return (
    <Collapsible.Root className="group">
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
                onPlay={() => dispatch(play([moduleIndex, index]))}
              />
            )
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
