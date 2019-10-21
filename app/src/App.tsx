import React, { useState, useEffect } from 'react';
import { ProgressBar } from './components/ProgressBar';
import styled from 'styled-components';
import { Button } from './components/Button';
import { changeProgress, getProgress } from './repositories/ProgressRepository'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * ~ * {
    margin-top: 1rem;
  }
`

const interval = 500

const App: React.FC = () => {
  const [started, updateStarted] = useState<boolean>(false)
  const [progress, updateProgress] = useState<number>(0)

  const onClickStart = async () => {
    const res = await changeProgress('start')
    updateStarted(res)
  }

  useEffect(() => {
    const update = async () => {
      const current = await getProgress()
      updateProgress(current)
      if (current >= 1) updateStarted(false)
    }

    const startUpdate = () => {
      if (started) {
        update()
        return setInterval(update, interval)
      }
    }

    const id: number | undefined = startUpdate()

    return () => {
      if (id) {
        clearInterval(id)
        changeProgress('cancel')
      }
    }
  }, [started])

  return (
    <div className="App">
      <Frame>
        <ProgressBar progress={progress} interval={interval} />
        <Button onClick={onClickStart}>
          start
        </Button>
      </Frame>
    </div>
  );
}

export default App;
