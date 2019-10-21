import React from 'react'
import styled from 'styled-components'

const Frame = styled.div<{ progress: number }>`
  background-color: white;
  border: 1px solid gray;
  border-radius: .5rem;
  height: 3rem;
  position: relative;
  width: 100%;

  ::after {
    align-items: center;
    background-color: blue;
    color: white;
    content: '${({ progress }) => progress}%';
    display: flex;
    height: 3rem;
    justify-content: center;
    position: absolute;
    width: ${({ progress }) => progress}%;
  }
`

export const ProgressBar: React.FC = () => (
  <Frame progress={50}>

  </Frame>
)