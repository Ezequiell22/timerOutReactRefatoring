import { useEffect, useState } from 'react'

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60 // 25 MINUTOS


function App() {

  
const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS)

  const minutes = Math.floor( secondsAmount / 60 )
  const seconds = secondsAmount % 60

  useEffect(() => {

    if (secondsAmount  > 0){
      setTimeout(() =>{
        setSecondsAmount(state => state - 1)
      }, 1000)
      
    }else{
      setSecondsAmount(COUNTDOWN_INITIAL_TIME_IN_SECONDS)
    }
    
  }, [secondsAmount])

  return (
    <div>
    <span>{String(minutes).padStart(2, '0')}</span>
    <span>:</span>
    <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  )
}

export default App
