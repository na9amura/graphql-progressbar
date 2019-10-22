import React, { useState, useEffect } from 'react';
import { ProgressBar } from '../components/ProgressBar';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { changeProgress, getProgress } from '../repositories/ProgressRepository'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 100vh;

  > * ~ * {
    margin-top: 1rem;
  }
`

const interval = 500

export const Progress: React.FC = () => {
  const [started, updateStarted] = useState<boolean>(false)
  const [progress, updateProgress] = useState<number>(0)

  const onClick = async (started: boolean) => {
    if (started) {
      await changeProgress('cancel')
      updateStarted(false)
      updateProgress(0)
    } else {
      const res = await changeProgress('start')
      updateStarted(res)
    }
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
    <Frame>
      <ProgressBar progress={progress} interval={interval} />
      <Button onClick={() => onClick(started)}>
        {started ? 'Cancel' : 'Start'}
      </Button>
    </Frame>
  );
}
