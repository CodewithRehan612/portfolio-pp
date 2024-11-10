import React from 'react'
import Heading from './Heading';
import Card from './Card';
import { title } from 'process';

const data = [
  {
    id: "0",
    title: "Todo-list",
    desc: "A React and Tpescript based app for managing and organizing your tasks efeciently.",
    img: "/Todo-list.jpeg.png",
    tags: ["React", "Node", "Css", "Typescript"],
  },
  {
    id: "1",
    title: "Countdown Timer",
    desc: "A Next.Js and Typescript powered website to track time with an interactive countdown feature.",
    img: "/count-down_jpeg.jpg",
    tags: ["React", "Node", "Css", "Typescript"],
  },
  {
    id: "2",
    title: "Weather Widget",
    desc: "A Next.Js and Typescript based tool for fetching and displaying real time weather data.",
    img: "/weather_app.jpeg.jpeg",
    tags: ["Next.JS", "Node", "Css", "Typescript"],
  },
  {
    id: "3",
    title: "Currency Converter Project",
    desc: "A simple HTML And Tpescript power tool for converting currencies with  real-time rate.",
    img: "/currency-converter.jpeg.png",
    tags: ["HTML", "Node", "Css", "Typescript"],
  },
  {
    id: "4",
    title: "Static Interactive Resume",
    desc: "A Static Iteractive Resume built with HTML and Css, allowing users to showcase their skills dynamically.",
    img: "/Interactive_resume.jpeg.png",
    tags: ["HTML", "Node", "Css", "Typescript"],
  },
  {
    id: "5",
    title: "Simple-Calculator",
    desc: "A simple calculator built with HTML CSS Typescript calculator for performing essential arthematics operations",
    img: "/calculator.ss_jpeg.webp",
    tags: ["HTML", "Node", "Css", "Typescript"],
  },

]

const projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading  title='My Projects'/>
      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>

    </div>
  )
}

export default projects