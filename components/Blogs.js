import Image from "next/image"
import Link from "next/link"
import axios from "axios"

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Blogs() {
    let blog_data = await axios.get(`${process.env.BASE_URL}/all-blog-posts`, { cache: 'no-store' });
    blog_data = blog_data.data;

    if (blog_data.statusCode !== 200) {
        return <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
            <div className="mx-auto mb-16 max-w-2xl">
                <h1 className="mx-auto mb-2 w-full max-w-xl text-3xl font-bold tracking-tight text-gray-800 md:text-center md:text-5xl">
                    All Blog Posts
                </h1>
                <hr className="my-4" />
                <p className="mb-4 text-gray-600">No posts found.</p>
            </div>
        </div>
    } else {
        const filteredResponse = blog_data.data;

        return <div className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
            <div className="mx-auto mb-16 max-w-2xl">
                <div className="mx-auto  flex max-w-sm items-center justify-center flex-wrap gap-y-3 mb-[40px]">
                    <Image src="/notion.svg" height={60} width={60} alt="Notion logo" />
                    <span className="mx-4">+</span>
                    <Image src="/nextjs.svg" height={80} width={133} alt="Next.js logo" />
                    <span className="mx-4">+</span>
                    <Image src="/tailwindcss.svg" height={24} width={192} alt="Tailwind CSS logo" />
                </div>
                <div>
                    <h1 className="mx-auto mb-2 w-full max-w-xl text-3xl font-bold tracking-tight text-gray-800 md:text-center md:text-5xl">
                        All Blog Posts
                    </h1>

                    <Link className="text-gray-500 hover:text-gray-600 " href={`/`}>Go Back</Link>

                    <hr className="my-4" />
                </div>

                {!filteredResponse.length && <p className="mb-4 text-gray-600">No posts found.</p>}

                {filteredResponse.map((post) => {
                    return (
                        <li className="py-4">
                            <article className=""><dl><dt className="sr-only">Published on</dt><dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"><time datetime="2023-01-07T00:00:00.000Z">Jan 7, 2023</time></dd></dl><div className=""><div><h3 className="text-xl font-bold leading-8 tracking-tight"><a className="text-gray-800 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400" href="/blog/how-to-mute-vercel-successful-email-with-vercel">Mute to vercel mute email notifications</a></h3></div><div className=" text-gray-500 max-w-none dark:text-gray-400">How do I prevent the Vercel for GitHub integration comments</div></div></article></li>
                    )

                    return (
                        <div key={post.id} className="mb-8 sm:flex">
                            <Link className="w-full"
                                href={"blogs/" + post.Slug}
                            >
                                <div className="w-full">
                                    <h3 className="w-full text-xl font-medium text-gray-900">
                                        {post.Heading}
                                    </h3>
                                    <p className="text-gray-700 mt-0">
                                        {post.Description}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    }


}