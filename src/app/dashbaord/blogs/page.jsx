"use client"
import axios from 'axios'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const tableHeaders = ["Product name", "Category", "Created At", "Action"]

const Page = () => {

  const [data, setData] = useState([])
  // console.log(data)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/blogs")
        setData(res?.data?.getBlogs)

      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  async function delPost(id) {
    // alert(id)
    try {
      const confirm = window.confirm("are you sure to delelte this post")
      if (!confirm) return
      const del = await axios.delete(`http://localhost:3000/api/blogs/${id}`)
      if (del?.data?.status) {
        alert("blog deleted")
        window.location.reload()
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeaders.map((v, i) => (
              <th scope="col" class="px-6 py-3">
                {v}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((v, i) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {v.title}
              </th>
              <td class="px-6 py-4">
                {v.category}
              </td>
              <td class="px-6 py-4">
                {new Date(v.createdAt).toDateString()}
              </td>
              <td class="px-6 py-4">
                <button onClick={() => delPost(v?._id)}>delete</button>
                <Link className='border px-3 py-1 rounded-lg' href={`/update-blog?id=${v?._id}`}>edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Page
