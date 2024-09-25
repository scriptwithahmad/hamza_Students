import React from 'react'

const Page = async ({ params }) => {
    // console.log(params.id)
    

    async function getPost() {
        try {
            let res = await fetch(`http://localhost:3000/api/blogs/${params.id}`)
            let post = await res.json()
            return post
        } catch (error) {
            console.log(error)
        }
    }

    const data = await getPost()
    const singleData = data?.getSingleBlog

    return (
        <div className='max-w-[1200px] m-auto'>
            <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
                <div class="order-1 sm:ml-6 xl:ml-0">
                    <h3 class="mb-2 text-slate-900 font-bold text-3xl">
                        <span class="mb-1 block text-sm leading-6 text-indigo-500">{singleData?.category}</span>
                        {singleData?.title}

                    </h3>
                    {/* <div class="prose prose-slate prose-sm text-slate-600">
                        <p>{singleData?.desc}</p>
                    </div> */}
                    <main dangerouslySetInnerHTML={{__html: singleData?.desc}} />
                </div>
                <img src={singleData?.image || "https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"} alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full h-[400px] object-cover sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
            </li>
        </div>
    )
}

export default Page
