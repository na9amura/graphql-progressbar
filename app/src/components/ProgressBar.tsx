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
    /* TODO: remove right radius until 100% */
    border-radius: .25rem;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    color: white;
    content: '${({ progress }) => progress ? `${progress}%` : ''}';
    display: flex;
    height: 3rem;
    justify-content: center;
    position: absolute;
    transition: all .2s ease-out;
    width: ${({ progress }) => progress}%;
  }
`

export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => (
  <Frame progress={progress} />
)