import { useAppSelector } from '@/app/store'

export function Header() {
  const { currentModule, currentLesson } = useAppSelector((state) => {
    const { currentModuleIndex, currentLessonIndex } = state.player

    const currentModule = state.player.course.modules[currentModuleIndex]

    const currentLesson = currentModule.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl  font-bold">{currentLesson.title}</h1>
      <span className="text-center text-sm text-zinc-400 md:text-left">
        Módulo &quot;{currentModule.title}&quot;
      </span>
    </div>
  )
}
