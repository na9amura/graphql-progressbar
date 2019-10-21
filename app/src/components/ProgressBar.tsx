import React from 'react'
import styled from 'styled-components'

const Frame = styled.div<{ progress: number, label: string, interval: number }>`
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
    content: '${({ label }) => label}';
    display: flex;
    height: 3rem;
    justify-content: center;
    position: absolute;
    transition: all ${({ interval }) => interval}ms linear;
    width: ${({ progress }) => progress}%;
  }
`

export const ProgressBar: React.FC<{ progress: number, interval: number }> = ({ progress, interval }) => {
  const percentage = Math.ceil(progress * 100)
  const label = progress ? `${percentage}%` : ''
  return <Frame progress={percentage} label={label} interval={interval} />
}
