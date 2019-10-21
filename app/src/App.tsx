import React, { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import styled from 'styled-components';
import { Button } from './components/Button';

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * ~ * {
    margin-top: 1rem;
  }
`

const App: React.FC = () => {
  const [state, updateState] = useState<{ started: boolean, progress: number }>({ started: false, progress: 0 })
  const onClickStart = () => {
    updateState({ ...state, progress: 30 })
  }

  return (
    <div className="App">
      <Frame>
        <ProgressBar progress={state.progress} />
        <Button onClick={onClickStart}>
          start
        </Button>
      </Frame>
    </div>
  );
}

export default App;
