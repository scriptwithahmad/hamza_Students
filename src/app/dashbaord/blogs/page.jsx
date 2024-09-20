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

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Created At
            </th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Page
