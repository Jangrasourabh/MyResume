import { Memetip } from "../components/Memetip"
import React from "react"
import cx from "clsx"

const data = [
  {
    title: "Design",
    items: [
      {
        text: "Figma",
        // src: "/figma.jpg"
      },
      { text: "Tailwind" },
      { text: "Material UI" },
      { text: "Bootstrap" },
      { text: "Syncfusion" },
      { text: "Design systems" },
      { text: "User research" },
    ],
  },
  {
    title: "Front-end",
    items: [
      { text: "Accessible HTML & CSS" },
      { text: "JavaScript & TypeScript" },
      {
        group: [
          {
            text: "React",
            // src: "/react.jpg"
          },
          {
            text: "Next.js",
            // src: "/next.jpg"
          },
          {
            text: "CRA",
            // src: "/cra.jpg"
          },
        ],
      },
      { text: "CSS-in-JS" },
      { text: "React Query" },
      { text: "Redux" },
      { text: "Zustand" },
    ],
  },
  {
    title: "Back-end",
    items: [
      { text: "Node.js" },
      { text: "REST" },
      { text: "MySQL" },
      { text: "PostgreSQL" },
      { text: "MongoDB" },
      { text: "Prisma ORM", },
      { text: "Drizzle ORM", },
    ],
  },
  {
    title: "Other",
    items: [
      {
        group: [
          { text: "Vercel", },
          {
            text: "AWS",
          },
          { text: "Heroku" },
        ],
      },
      { text: "Firebase" },
      {
        text: "Docker",
      },
      { text: "Github" },
      { text: "Gitlab" },
    ],
  },
]

const Skills = () => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Skills and tools</h2>
      <h4 className="text-gray-700 lg:text-lg">
        Some of the languages, tools and concepts I have experience with.
      </h4>

      {/* <IdProvider> */}
      <div className="flex flex-wrap mt-5 -mx-4">
        {data.map((field, fieldIndex) => {
          return (
            <div key={fieldIndex} className="w-1/2 px-4 mt-4 lg:w-1/4">
              <div className="text-lg font-bold text-gray-800">
                {field.title}
              </div>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                {field.items.map((item, itemIndex) => {
                  return (
                    <li
                      key={itemIndex}
                      className={cx({
                        "py-1": Boolean(!item.src && !item.group),
                      })}
                    >
                      {item.group ? (
                        item.group.map((child, childIndex) => {
                          const isSecondLast =
                            item.group.length - 1 === childIndex

                          return (
                            <React.Fragment key={childIndex}>
                              {isSecondLast
                                ? " & "
                                : childIndex !== 0 && ", "}

                              {child.src ? (
                                <Memetip src={child.src}>
                                  {child.text}
                                </Memetip>
                              ) : (
                                <>{child.text}</>
                              )}
                            </React.Fragment>
                          )
                        })
                      ) : item.src ? (
                        <Memetip src={item.src}>{item.text}</Memetip>
                      ) : (
                        item.text
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
