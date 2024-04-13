import { Video } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
  onPlay: () => void
}

export function Lesson({ title, duration, onPlay }: LessonProps) {
  return (
    <button
      className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-200"
      onClick={onPlay}
    >
      <Video className="size-4 text-zinc-500 group-hover:text-zinc-200" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500 group-hover:text-zinc-200">
        {duration}
      </span>
    </button>
  )
}
