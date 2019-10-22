import React from 'react';
import { Progress } from './pages/Progress';
import { GlobalStyle } from './styles/GlobalStyle';

export const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Progress/>
    </div>
  )
}
