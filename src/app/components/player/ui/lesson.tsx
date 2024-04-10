import { Video } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
}

export function Lesson({ title, duration }: LessonProps) {
  return (
    <button className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-200">
      <Video className="size-4 text-zinc-500 group-hover:text-zinc-200" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500 group-hover:text-zinc-200">
        {duration}
      </span>
    </button>
  )
}
