import React, { FC } from 'react'

const About: FC<{ title: string }> = ({ title }): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default About
