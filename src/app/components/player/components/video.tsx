'use client'

import { useAppSelector } from '@/app/store'
import { next } from '@/app/store/slices/player'
import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'

export function Video() {
  const dispatch = useDispatch()
  const video = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]

    return currentLesson
  })

  const url = new URL(`watch?v=${video.id}`, 'https://www.youtube.com/')

  function handlePlayNext() {
    dispatch(next())
  }

  return (
    <div className="flex-1">
      <div className="aspect-video w-full bg-zinc-950">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          url={url.href}
          onEnded={handlePlayNext}
        />
      </div>
    </div>
  )
}
