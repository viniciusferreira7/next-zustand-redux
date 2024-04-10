import { ChevronDown } from 'lucide-react'
import { Lesson } from '../ui'

interface ModuleProps {
  moduleIndex: number
  title: string
  amountOfLesson: number
}

export function Module({ moduleIndex, title, amountOfLesson }: ModuleProps) {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="grid size-10 place-items-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfLesson} aulas</span>
        </div>
        <ChevronDown className="ml-auto size-4 text-zinc-400" />
      </button>
      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson title="Fundamentos do Redux" duration="9:30" />
        <Lesson title="Fundamentos do Redux" duration="9:30" />
        <Lesson title="Fundamentos do Redux" duration="9:30" />
      </nav>
    </div>
  )
}
