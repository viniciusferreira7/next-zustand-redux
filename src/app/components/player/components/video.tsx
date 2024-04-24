'use client'

import { useCurrentLesson, useStore } from '@/app/zustand-store'
import { Loader } from 'lucide-react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'

export function Video() {
  const { isLoading, next } = useStore((store) => {
    return { isLoading: store.isLoading, next: store.next }
  })
  const { currentLesson } = useCurrentLesson()

  const url = new URL(
    `watch?v=${currentLesson?.id}`,
    'https://www.youtube.com/',
  )

  useEffect(() => {
    document.title = `Assistindo: ${currentLesson?.title}`
  })

  if (!currentLesson) {
    return null
  }

  return (
    <div className="flex-1">
      <div className="aspect-video w-full bg-zinc-950">
        {isLoading ? (
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
            onEnded={next}
          />
        )}
      </div>
    </div>
  )
}
