import { HighlightOnHover } from "../components/HighlightOnHover"

const Contact = () => {
  return (
    <div className="container px-4 mx-auto">
      <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
      <p className="text-gray-700 lg:text-lg">
        Do you have a job opportunity or idea you'd like to discuss? Feel free
        to reach me at{" "}
        <HighlightOnHover>
          <a href="mailto:mrmukulat01@gmail.com" className="font-medium">
            mrmukulat01@gmail.com
          </a>
        </HighlightOnHover>
        . You can also find me on{" "}
        <HighlightOnHover>
          <a
            href="https://twitter.com/jmukul1997"
            target="_blank"
            className="font-medium"
          >
            Twitter
          </a>
        </HighlightOnHover>
        ,{" "}
        <HighlightOnHover>
          <a
            href="https://github.com/jmukul1997"
            target="_blank"
            className="font-medium"
          >
            Github
          </a>
        </HighlightOnHover>{" "}
        and{" "}
        <HighlightOnHover>
          <a
            href="https://www.linkedin.com/in/0609sourabh/"
            target="_blank"
            className="font-medium"
          >
            Linkedin
          </a>
        </HighlightOnHover>
        .
      </p>
    </div>
  )
}

export default Contact
