"use client"
import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

const Page = () => {


    const [formData, setFormData] = useState({
        desc: "",
        title: "",
        category: "",
    })

    console.log(formData)


    // onchange handler -------
    const changeHandler = async (event) => {

        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })

    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("/api/blogs", formData)

            console.log(res.data)

            if (res.data.success) {
                alert(res.data.message)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-8">
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 max-w-[800px] m-auto xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Add new blog
                            </h1>
                            <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Title</label>
                                    <input type="title" name="title" onChange={changeHandler} value={formData.title} id="title" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required="" />
                                </div>
                                <div>
                                    <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">category</label>
                                    <input type="text" name="category" onChange={changeHandler} value={formData.category} id="category" placeholder="category" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <div className=" mb-6">
                                    <Editor
                                        apiKey="z5f7ugf635wz96udas9dzbjlugsi9xxx6oxnnb6aw83hdkdk"
                                        value={formData.desc}
                                        onEditorChange={(content) =>
                                            setFormData({ ...formData, desc: content })
                                        }
                                        init={{
                                            height: 500,
                                            menubar: false,
                                            plugins: [
                                                "advlist",
                                                "autolink",
                                                "lists",
                                                "link",
                                                "image",
                                                "charmap",
                                                "preview",
                                                "anchor",
                                                "searchreplace",
                                                "visualblocks",
                                                "code",
                                                "fullscreen",
                                                "insertdatetime",
                                                "media",
                                                "table",
                                                "code",
                                                "help",
                                                "wordcount",
                                            ],
                                            toolbar:
                                                "undo redo blocks " +
                                                "bullist numlist " +
                                                "table image removeformat code fullscreen",
                                            content_style:
                                                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                        }}
                                    />
                                </div>

                                <button type="submit" class="w-full text-white bg-indigo-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add Blog</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
