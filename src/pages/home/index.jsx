import { useEffect, useState } from 'react'
import { Main } from './style'

export default function Home() {
  const [timerStart, setTimerStart] = useState(25 * 60)
  const minutes = Math.floor(timerStart / 60)
  const seconds = timerStart % 60

  useEffect(() => {
    if (timerStart === 0) {
      alert('Está na hora de Descansar')
    } else {
      setTimeout(() => {
        setTimerStart(timerStart - 1)
      }, 1000)
    }
  }, [timerStart])

  return (
    <Main>
      <h1>Timer</h1>
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </Main>
  )
}
