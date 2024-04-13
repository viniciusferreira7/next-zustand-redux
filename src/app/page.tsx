import { Player } from './components/player/components'
import { ReduxProvider } from './context/redux-provider'

export default function Home() {
  return (
    <div className="grid h-screen place-items-center bg-zinc-950 p-4 text-zinc-50">
      <div className="w-full">
        <ReduxProvider>
          <Player />
        </ReduxProvider>
      </div>
    </div>
  )
}
