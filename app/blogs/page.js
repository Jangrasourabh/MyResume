import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Blogs() {
  let blog_data = await axios.get(`${process.env.BASE_URL}/all-blog-posts`, { cache: "no-store" });
  blog_data = blog_data.data;

  const getCurrentDateTimeFormatted = () => {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var day = ("0" + currentDate.getDate()).slice(-2);
    var enlishMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var formattedDateTime = enlishMonthNames[currentDate.getMonth()] + " " + day + ", " + year;
    return formattedDateTime;
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden container px-4 mx-auto">
      <div className="h-auto flex items-center">
        <div className="flex items-center lg:px-4 lg:mt-0 mt-0">
          <Image src="/Sourabh.png" alt="Profile" width={100} height={100} priority={true} />

          <div className="">
            <div className="mx-0 my-0 text-lg">
              {" "}
              <div className="text-3xl font-bold text-gray-800">Sourabh Kumar</div>
            </div>
            <div className="mx-0 my-0">Frontend Developer | React | Nextjs | Nodejs | Typescript</div>
          </div>
        </div>
      </div>

      <hr className="pb-6" />

      {/* scrollable content */}
      <div className="flex-1 overflow-y-scroll no-scrollbar">
        {(() => {
          if (blog_data.statusCode !== 200) {
            return (
              <div className="mb-16 flex w-full max-w-4xl flex-col items-start justify-center">
                <div className="mx-auto mb-16 max-w-2xl">
                  <h1 className="mx-auto mb-2 w-full max-w-xl text-3xl font-bold tracking-tight text-gray-800 md:text-center md:text-5xl">
                    All Blog Posts
                  </h1>
                  <hr className="my-4" />
                  <p className="mb-4 text-gray-600">No posts found.</p>
                </div>
              </div>
            );
          } else {
            const filteredResponse = blog_data.data;
            return (
              <div className=" mb-16 flex w-full  flex-col items-start justify-center">
                <div className="mb-16 pl-4">
                  <div className="text-[45px] flex items-center justify-center flex-wrap gap-y-3 mb-[40px]">
                    <Image src="/notion.svg" height={60} width={60} alt="Notion logo" />
                    <span className="mx-4">+</span>
                    <Image src="/nextjs.svg" height={80} width={133} alt="Next.js logo" />
                    <span className="mx-4">+</span>
                    <Image src="/tailwindcss.svg" height={24} width={192} alt="Tailwind CSS logo" />
                  </div>
                  <div>
                    <h1 className="mb-2 w-full  text-xl font-bold tracking-tight text-gray-800  md:text-2xl">
                      All Blog Posts
                    </h1>

                    <hr className="my-4" />
                  </div>

                  {!filteredResponse.length && <p className="mb-4 text-gray-600">No posts found.</p>}

                  {filteredResponse.map((post, index) => {
                    return (
                      <div className="py-4" key={index}>
                        <Link className="w-full" href={"blogs/" + post.Slug}>
                          <div className="">
                            <dl>
                              <dt className="sr-only">Published on</dt>
                              <dd className="text-sm font-medium leading-6 text-gray-500 ">
                                <time datetime="2023-01-07T00:00:00.000Z">
                                  {getCurrentDateTimeFormatted(post.Date)}
                                </time>
                              </dd>
                            </dl>
                            <div className="">
                              <div>
                                <h3 className="text-xl font-bold leading-8 tracking-tight">{post.Heading}</h3>
                              </div>
                              <div className=" text-gray-500 max-w-none ">{post.Description}</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}
