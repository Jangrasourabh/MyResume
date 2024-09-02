import { useHover } from "@react-aria/interactions"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { RoughNotation } from "react-rough-notation"
import { FOCUS_VISIBLE_OUTLINE } from "../components/constants"
import { getDarkColor } from "../components/useColorSeed"

const data = [
  {
    name: "EZ Works",
    description:
      "A Google web clone which is made in Reactjs. This project uses google Custom Search JSON API which is there in Google Programmable Search Engine.(Reactjs, Tailwind CSS, and Google Custom Search JSON API).",
    url: "https://ez.works/",
    image: "/EZWorksWeb.png",
  },
  {
    name: "QL Supply",
    description:
      "A gallery app which is made in Reactjs. In this project we are utilizing Unsplash Api to get data of differnent images. We can search and also download image for a specific category. We have used express and node for our API and with the help of serverless we have deployed our code to  AWS Lambda.(ReactJs , Nodejs , ExpressJS , AWS Lambda)",
    url: "https://qlsupply.com/", 
    image: "/QLSupply.png",
  },
  {
    name: "Headlines Today",
    description:
      "A gallery app which is made in Reactjs. In this project we are utilizing Unsplash Api to get data of differnent images. We can search and also download image for a specific category. We have used express and node for our API and with the help of serverless we have deployed our code to  AWS Lambda.(ReactJs , Nodejs , ExpressJS , AWS Lambda)",
    url: "https://qlsupply.com/", 
    image: "/Headlinestoday.png",
  },
  {
    name: "BT Bazaar",
    description:
      "A gallery app which is made in Reactjs. In this project we are utilizing Unsplash Api to get data of differnent images. We can search and also download image for a specific category. We have used express and node for our API and with the help of serverless we have deployed our code to  AWS Lambda.(ReactJs , Nodejs , ExpressJS , AWS Lambda)",
    url: "https://qlsupply.com/", 
    image: "/BTBazaar.png",
  },
  {
    name: "Business Today",
    description:
      "A gallery app which is made in Reactjs. In this project we are utilizing Unsplash Api to get data of differnent images. We can search and also download image for a specific category. We have used express and node for our API and with the help of serverless we have deployed our code to  AWS Lambda.(ReactJs , Nodejs , ExpressJS , AWS Lambda)",
    url: "https://qlsupply.com/", 
    image: "/Businesstoday.png",
  }
]

const Project = ({ project, seed, index }) => {
  let { hoverProps, isHovered } = useHover({})

  return (
    <Link target="_blank" className={clsx("block rounded-xl", FOCUS_VISIBLE_OUTLINE)} href={project.url}>
      <div className="flex items-center justify-between px-4 py-2 rounded-t-lg border-2 border-gray-400 border-b-0 max-w-[500px]"><div className="flex w-12 space-x-1 "><div className="w-3 h-3 bg-gray-400  rounded-full"></div><div className="w-3 h-3 bg-gray-400  rounded-full"></div><div className="w-3 h-3 bg-gray-400  rounded-full "></div></div><div className="flex-grow min-w-0 mx-2 bg-gray-400  rounded-md md:mx-4"><div className="h-6"></div></div><div className="mr-2 "><span className="text-[#18243f]"><svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span></div></div>
      <div className="max-w-[500px]" {...hoverProps}>
        <Image
          src={project.image}
          alt="Project Preview"
          width={500}
          height={300}
          priority={true}
          className="border-2 border-gray-400 rounded-b-lg"
        />
        {/* </Tilt> */}
        <p className="mt-4 text-xl font-bold text-gray-800">
          {project.name}{" "}
          <span className="text-base font-normal text-gray-500">
            &middot;
          </span>
        </p>{" "}
        <p className="text-gray-700">{project.description}</p>
        <div className={getDarkColor(seed[index])}>
          {/* <RoughNotation
            type="underline"
            show={isHovered}
            strokeWidth={2}
            iterations={1}
            padding={2}
            animationDuration={300}
          > */}
            <span className="font-medium text-gray-800">View Project</span>
          {/* </RoughNotation> */}
        </div>   
      </div>
    </Link>
  )
}

const Projects = ({ seed }) => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
      <h4 className="text-gray-700 lg:text-lg">
        Some of the side projects I've been working on in the last few months.
      </h4>

      <div className="-mt-2 lg:flex lg:flex-wrap lg:-mx-6">
        {data.map((project, i) => {
          return (
            <div key={i} className="mt-12 lg:w-1/2 lg:px-6">
              <Project project={project} seed={seed} index={i} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
