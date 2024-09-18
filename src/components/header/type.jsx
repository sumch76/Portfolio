import React from 'react'
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
        "Frontend Developer",
          "Cricket Enthusiast",
          "Learning Backend",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  )
}

export default Type