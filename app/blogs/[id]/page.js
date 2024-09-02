import { RenderBlocks } from "../../../blogComponents/ContentBlocks";
import axios from "axios";
import Image from "next/image";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function SingleBlogPost(props) {
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
            <div className="mx-0 my-0">Frontend Enginner | React | Nextjs | Nodejs | Typescript</div>
          </div>
        </div>
      </div>

      <hr className="pb-6" />

      {/* scrollable content */}
      <div className="flex-1 overflow-y-scroll no-scrollbar">
        {(async () => {
          let blogSlug = props.params.id;
          const url = process.env.BASE_URL + "/single-blog-post/" + blogSlug;
          let singleResponse = await axios.get(url);
          singleResponse = singleResponse.data;
          console.log(` singleResponse `, singleResponse);
          if (singleResponse.statusCode == 200 && singleResponse.message == "Data not found") {
            return <div>404</div>;
          } else {
            const page = singleResponse.data.page;
            const blocks_ = singleResponse.data.blocks_;

            return (
              <div className="max-w-3xl" style={{ gridTemplateRows: "auto 1fr" }}>
                {!page || (!blocks_ && <div></div>)}
                <h1 className="mb-5 text-3xl font-bold tracking-tight text-black md:text-5xl">
                  {page.properties.Post.title[0].plain_text}
                </h1>

                <p className="text-sm text-gray-700">
                  {new Date(page.created_time).toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>
                <RenderBlocks blocks={blocks_} />
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}
