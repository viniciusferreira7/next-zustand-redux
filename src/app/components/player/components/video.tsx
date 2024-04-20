'use client'

import { useAppSelector } from '@/app/store'
import { next, useCurrentLesson } from '@/app/store/slices/player'
import { Loader } from 'lucide-react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch } from 'react-redux'

export function Video() {
  const dispatch = useDispatch()
  const { currentLesson } = useCurrentLesson()
  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

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
        {isCourseLoading ? (
          <div className="grid h-full w-full place-items-center">
            <Loader className="size-6 animate-spin text-zinc-400" />
          </div>
        ) : (
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            playing
            url={url.href}
            onEnded={handlePlayNext}
          />
        )}
      </div>
    </div>
  )
}
