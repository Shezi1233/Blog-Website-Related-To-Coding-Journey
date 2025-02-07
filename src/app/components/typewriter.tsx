import React from 'react'
import Typewriter from 'typewriter-effect'
const TypewriterComponent = () => {
  return (
    <div>
        <h1>I am a </h1>
        <h1 className='text-red-500'>
            <Typewriter
              options={{
                strings: [
                    "Web developer",
                    "Content Creator",
                    "Gamer",
                    "Logic Generator"
                ],
                autoStart: true,
                loop: true,
              }}
            />
        </h1>
    </div>
  )
}
export default TypewriterComponent
