import cx from "clsx";
import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTimeout } from "react-use";
import { FOCUS_VISIBLE_OUTLINE } from "../components/constants";
import { RainbowHighlight } from "../components/RainbowHighlight";
import { useIsFontReady } from "../components/useIsFontReady";
import CodeMirrorComponent from "./CodeMirrorComponent";

const About = ({ seed }) => {
  const isFontReady = useIsFontReady;

  const [fn, , reset] = useTimeout(100);

  React.useEffect(() => {
    reset();
  }, [isFontReady]);

  const isNotationDone = fn();

  const notationSettings = {
    type: "highlight",
    padding: 0,
    multiline: true,
    padding: [0, 2],
    iterations: 1,
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="lg:flex lg:flex-wrap lg:-mx-4">
        <div className="flex lg:flex-row items-center">
          <div className="lg:w-2/3 lg:px-4">
            <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
              Hello! I&apos;m Sourabh, a developer based in India
            </h1>

            <div className="mt-4 text-gray-700">
              <p>
                I&apos;m a programming wizard who&apos;s dabbled in both the enchanted realms of frontend development. Armed with
                my trusty spells, I mean, programming languages JavaScript.
              </p>

              <p>I conjure up mesmerizing web experiences that&apos;ll make your users say &apos;Wow!&apos;</p>

              <p>
                I&apos;ve mastered the arcane arts of Reactjs, wielding powerful incantations like Redux, React-Query, and
                TailwindCSS to craft interfaces so sleek, they make unicorns jealous. When it comes to backend sorcery,
                I summon the spirits of Nodejs, commanding ExpressJS, MongoDB, and MySql to do my bidding. Together, we
                deploy our creations to the cloud, where they soar among the digital clouds like majestic dragons.
              </p>

              <p>
                But wait, there&apos;s more! I&apos;m not just a master of spells. So, if you seek a companion on your quest for
                digital greatness, fear not! Send me a raven—uh, I mean, contact me! let&apos;s embark on this epic journey
                together!&quot;
              </p>
            </div>

            <div>
              <div className="flex flex-wrap mt-6 space-x-4">
                <a
                  href="delba-resume.pdf"
                  target="_blank"
                  className={cx(
                    "inline-flex items-center lg:px-8 px-4 py-2 font-medium text-white bg-gray-800 border border-transparent rounded-full shadow-sm hover:bg-gray-900",
                    FOCUS_VISIBLE_OUTLINE
                  )}
                >
                  View Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/0609sourabh/"
                  target="_blank"
                  className={cx(
                    "inline-flex items-center lg:px-8 px-4 py-2 font-medium text-white bg-gray-800 border border-transparent rounded-full shadow-sm hover:bg-gray-900",
                    FOCUS_VISIBLE_OUTLINE
                  )}
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
          <CodeMirrorComponent />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container px-4 mx-auto">
      <div className="lg:flex lg:flex-wrap lg:-mx-4">
        <div className="lg:flex-col">
          <div className="lg:w-2/3 lg:px-4">
            <RoughNotationGroup show={isFontReady}>
              <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
                Hello! I'm Mukul, a{" "}
                <RainbowHighlight className="text-gray-900" colorIndex={seed[0]}>
                  developer
                </RainbowHighlight>{" "}
                based in India
              </h1>

              <div className="mt-4 text-gray-700">
                <p>
                  I'm a{" "}
                  <RainbowHighlight className="text-gray-700" colorIndex={seed[1]}>
                    programming wizard
                  </RainbowHighlight>{" "}
                  who's dabbled in both the enchanted realms of{" "}
                  <RainbowHighlight className="text-gray-700" colorIndex={seed[2]}>
                    frontend and backend development
                  </RainbowHighlight>{" "}
                  . Armed with my trusty spells, I mean, programming languages{" "}
                  <RainbowHighlight className="text-gray-700" colorIndex={seed[3]}>
                    JavaScript
                  </RainbowHighlight>
                </p>

                <p>I conjure up mesmerizing web experiences that'll make your users say 'Wow!'</p>

                <p>
                  I've mastered the arcane arts of Reactjs, wielding powerful incantations like{" "}
                  <RainbowHighlight className="text-gray-700" colorIndex={seed[4]}>
                    Redux,{" "}
                  </RainbowHighlight>{" "}
                  <RainbowHighlight className="text-gray-700" colorIndex={seed[1]}>
                    {" "}
                    React-Query
                  </RainbowHighlight>
                  , and{" "}
                  <RainbowHighlight className="text-gray-700" colorIndex={seed[2]}>
                    TailwindCSS
                  </RainbowHighlight>{" "}
                  to craft interfaces so sleek, they make unicorns jealous. When it comes to backend sorcery, I summon
                  the spirits of Nodejs, commanding{" "}
                  <RainbowHighlight className="text-gray-700" colorIndex={seed[4]}>
                    ExpressJS,
                  </RainbowHighlight>{" "}
                  <RainbowHighlight className="text-gray-700" colorIndex={seed[2]}>
                    {" "}
                    MongoDB
                  </RainbowHighlight>
                  , and{" "}
                  <RainbowHighlight className="text-gray-700" colorIndex={seed[3]}>
                    {" "}
                    MySql
                  </RainbowHighlight>{" "}
                  to do my bidding. Together, we deploy our creations to the cloud, where they soar among the{" "}
                  <RainbowHighlight className="text-gray-700" colorIndex={seed[4]}>
                    digital clouds
                  </RainbowHighlight>{" "}
                  like majestic dragons.
                </p>

                <p>
                  But wait, there's more! I'm not just a master of spells. So, if you seek a companion on your quest for
                  digital greatness, fear not! Send me a raven—uh, I mean, contact me! let's embark on this epic journey
                  together!"
                </p>
              </div>
            </RoughNotationGroup>

            <RoughNotation
              {...notationSettings}
              show={isNotationDone}
              type="circle"
              animationDuration={1500}
              animationDelay={1700}
              strokeWidth={1.5}
              iterations={3}
              padding={5}
            >
              <a
                href="#contact"
                className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none"
              >
                Hire me?
              </a>
            </RoughNotation>
            <div>
              <div className="flex flex-wrap mt-6 space-x-4">
                <a
                  href="delba-resume.pdf"
                  target="_blank"
                  className={cx(
                    "inline-flex items-center lg:px-8 px-4 py-2 font-medium text-white bg-gray-800 border border-transparent rounded-full shadow-sm hover:bg-gray-900",
                    FOCUS_VISIBLE_OUTLINE
                  )}
                >
                  View Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/jmukul1997/"
                  target="_blank"
                  className={cx(
                    "inline-flex items-center lg:px-8 px-4 py-2 font-medium text-white bg-gray-800 border border-transparent rounded-full shadow-sm hover:bg-gray-900",
                    FOCUS_VISIBLE_OUTLINE
                  )}
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
