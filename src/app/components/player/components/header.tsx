import { useCurrentLesson } from '@/app/store/slices/player'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl  font-bold">{currentLesson.title}</h1>
      <span className="text-center text-sm text-zinc-400 md:text-left">
        Módulo &quot;{currentModule.title}&quot;
      </span>
    </div>
  )
}
