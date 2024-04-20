import { useAppSelector } from '@/app/store'
import { useCurrentLesson } from '@/app/store/slices/player'

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()
  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  if (isCourseLoading) {
    return (
      <div className="flex flex-col gap-1">
        <div className="h-8 w-32  animate-pulse rounded-lg bg-gray-600	" />
        <div className="h-4 w-44 animate-pulse rounded-lg bg-gray-600	" />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl  font-bold">{currentLesson?.title}</h1>
      <span className="text-center text-sm text-zinc-400 md:text-left">
        Módulo &quot;{currentModule?.title}&quot;
      </span>
    </div>
  )
}
