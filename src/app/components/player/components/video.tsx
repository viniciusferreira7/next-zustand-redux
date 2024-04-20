'use client'

import { next, useCurrentLesson } from '@/app/store/slices/player'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'

export function Video() {
  const dispatch = useDispatch()
  const { currentLesson } = useCurrentLesson()

  const url = new URL(
    `watch?v=${currentLesson?.id}`,
    'https://www.youtube.com/',
  )

  function handlePlayNext() {
    dispatch(next())
  }

  useEffect(() => {
    document.title = `Assistindo: ${currentLesson?.title}`
  })

  if (!currentLesson) {
    return null
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
