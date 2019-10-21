import React, { useState, useEffect } from 'react';
import { ProgressBar } from './components/ProgressBar';
import styled from 'styled-components';
import { Button } from './components/Button';
import { startProgress, getProgress } from './repositories/ProgressRepository'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * ~ * {
    margin-top: 1rem;
  }
`

type AppState = { started: boolean, progress: number, intervalId?: number }
const interval = 500

const App: React.FC = () => {
  const [state, updateState] = useState<AppState>({ started: false, progress: 0, intervalId: undefined })
  const onClickStart = async () => {
    const started = await startProgress()
    updateState({ ...state, started })
  }

  useEffect(() => {
    const update = async () => {
      const progress = await getProgress()
      updateState({ ...state, progress: progress })
      // TODO: stop interval if 100%
    }

    let intervalId: number | undefined = undefined
    if (state.started) {
      intervalId = setInterval(update, interval)
    }

    return () => clearInterval(intervalId)
  }, [state])

  return (
    <div className="App">
      <Frame>
        <ProgressBar progress={state.progress} interval={interval} />
        <Button onClick={onClickStart}>
          start
        </Button>
      </Frame>
    </div>
  );
}

export default App;
