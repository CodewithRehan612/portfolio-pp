
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                Hi, I'm Rehan, a passionate frontend developer with a focus on creating seamless and responsive user interfaces. I enjoy turning ideas into visually appealing and functional websites. I specialize in building user-friendly and efficient websites using modern technologies like TypeScript, Next.js, and CSS frameworks. My journey started with an interest in web design, which evolved into learning frontend technologies. I got admission in course of Generative AI, Web3, and Metaverse, where I developed projects using Next.js and TypeScript. Currently, my course is ongoing and i'm learning alot of things. Meanwhile I am enhancing my skills in responsive design and building portfolio and blog websites to showcase my work.
                
                </p>
            </div>
            <div>
              <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in-up">Typescript</h2>
                  <h2 data-aos="zoom-in-up">React.js</h2>
                  <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
                <div className='space-y-2'>
                  <h2 data-aos="zoom-in-up">Tailwind</h2>
                  <h2 data-aos="zoom-in-up">CSS</h2>
                  <h2 data-aos="zoom-in-up">Node.js</h2>
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Skills