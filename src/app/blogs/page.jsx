import React from 'react'

async function getPost() {
    try {
        let res = await fetch(`http://localhost:3000/api/blogs`)
        let post = await res.json()
        return post
    } catch (error) {
        console.log(error)
    }
}

const Page = async () => {


    const postData = await getPost()
    const data = postData?.getBlogs

    return (
        <main className='grid grid-cols-3 gap-4 items-center max-w-[1200px] m-auto'>
            {data?.map((v, i) => (
                <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
                    <div class="order-1 sm:ml-6 xl:ml-0">
                        <h3 class="mb-1 text-slate-900 font-semibold">
                            {v?.title}
                        </h3>
                        <div class="prose prose-slate prose-sm text-slate-600 line-clamp-2">
                            <p>{v?.desc}</p>
                        </div><a
                            class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                            href={`/blogs/${v._id}`}>
                            Learn more
                            <span class="sr-only">, Completely unstyled, fully accessible UI components</span>
                            <svg class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                                width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M0 0L3 3L0 6"></path>
                            </svg></a>
                    </div>
                    <img src={v?.image || "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"} alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 size-[300px] object-cover sm:mb-0 xl:mb-6 " width="1216" height="640" />
                </li>
            ))}
        </main>
    )
}

export default Page
