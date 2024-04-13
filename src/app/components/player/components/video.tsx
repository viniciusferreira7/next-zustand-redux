'use client'

import { useAppSelector } from '@/app/store'
import ReactPlayer from 'react-player'

export function Video() {
  const video = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLesson
  })

  const url = new URL(`watch?v=${video.id}`, 'https://www.youtube.com/')

  return (
    <div className="flex-1">
      <div className="aspect-video w-full bg-zinc-950">
        <ReactPlayer width="100%" height="100%" controls url={url.href} />
      </div>
    </div>
  )
}
