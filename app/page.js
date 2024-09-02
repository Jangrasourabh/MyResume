"use client";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import { useColorSeed } from "@/hooks/useColorSeed";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import { HighlightOnHover } from "../components/HighlightOnHover";
import Image from "next/image";
import CodeMirrorComponent from "@/components/CodeMirrorComponent";

export async function generateMeta() {
  return {
    title: "Sourabh Kumar",
    description: "Sourabh Kumar's blog",
    icons: {
      icon: {
        src: "/Sourabh.png",
        type: "image/jpg",
        sizes: "192x192",
      },
    },
  };
}

export default function Home() {
  const seed = useColorSeed();

  const removeCache = async (slug) => {
    try {
      let cacheUrl = await axios.get(`${process.env.BASE_URL}/single-blog-post-notion/${slug}`, { cache: "no-store" });
      cacheUrl = cacheUrl.data;
      if (cacheUrl.statusCode === 200) {
        console.log("Cache removed successfully");
      }
    } catch (error) {
      console.log("Error while removing cache", error);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("showAlert")) {
      let foo = prompt("Enter the slug of the blog you want to remove cache for:");
      removeCache(foo);
    }
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden container px-4 mx-auto">
      <div className="h-auto flex items-center">

        <div className="flex items-center gap-2 lg:p-4 lg:mt-0 mt-0">
          <Image src="/Sourabh.png" alt="Profile" width={80} height={80} priority={true} />

          <div className="">
            <div className="mx-0 my-0 text-lg">
              {" "}
              <div className="text-3xl font-bold text-gray-800">
                <HighlightOnHover>Sourabh Kumar</HighlightOnHover>
              </div>
            </div>
            <div className="mx-0 my-0">Frontend Enginner | React | Nextjs | Nodejs | Typescript</div>
          </div>
        </div>
      </div>

      <hr className="pb-6" />

      {/* scrollable content */}
      <div className="flex-1 overflow-y-scroll no-scrollbar">

        <div id="about">
          <About seed={seed} />
        </div>

        <div className="container px-4 mx-auto mt-10">
          <h2 className="text-3xl font-bold text-gray-800">Blogs</h2>
          <p>
            Want to check out the best blogs written by me -{" "}
            <Link className="underline text-black-700" href={`/blogs`}>
              Click here
            </Link>
          </p>
        </div>

        <div className="mt-10" id="skills">
          <Skills />
        </div>

        <div className="mt-10" id="work">
          <Work />
        </div>

        <div className="mt-10" id="projects">
          <Projects seed={seed} />
        </div>

        <div className="mt-10" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
