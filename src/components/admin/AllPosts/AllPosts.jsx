"use client";
import React, { useEffect, useState } from "react";
import styles from "@/components/admin/AllPosts/AllPosts.module.css";
import Link from "next/link";
import { makeApiCall } from "@/utils/makeApiCall";
import { Bounce, toast } from "react-toastify";
import { useAuth } from "@/context/ContextProvider";

const AllPosts = () => {
  const [deletePostId, setDeletePostId] = useState();

  const [deleteModal, setdeleteModal] = useState(false);
  const { fetchAllBlogs, blogs } = useAuth();

  const handleDeletePost = async () => {
    const onSuccess = (res) => {
      setDeletePostId(null);
      toast.info(`${res.message}`, {
        transition: Bounce,
      });
      fetchAllBlogs();
    };
    const onError = (error) => {
      console.error("Error 409: Blogs delete error", error);
    };
    await makeApiCall("DELETE", `blog/delete-blog/${deletePostId}`, {}, onSuccess, onError);
    setdeleteModal(false);
  };
  // MARK: return code
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-2">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">All Posts</h2>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Post
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                        <span>Image</span>
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                        <span>Post Title</span>
                      </th>
                      <th scope="col" className="px-6 py-3.5 text-left text-sm font-normal text-gray-500">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3.5 text-left text-sm font-normal text-gray-500">
                        Category
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                        Status
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-500">
                        Author
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {blogs?.map((item, index) => (
                      <tr key={item._id} className="divide-x divide-gray-200">
                        <td className=" px-2 py-2">
                          <div className="w-full h-auto">
                            <img className="object-cover h-full w-full" src={item?.image} alt="blog cover" />
                          </div>
                        </td>
                        <td className=" px-6 py-2">
                          <div className="text-sm text-gray-900">{item.title}</div>
                        </td>
                        <td className=" px-6 py-2">
                          <div className="text-sm text-gray-900 text-ellipsis line-clamp-4">{item.description}</div>
                        </td>
                        <td className=" px-6 py-2">
                          <div className="text-sm text-gray-900">{item.categories}</div>
                        </td>
                        <td className=" px-4 py-2">
                          {item.status === "active" || item.status === "Active" ? (
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              {item.status}
                            </span>
                          ) : (
                            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                              {item.status}
                            </span>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <img className="h-10 w-10 rounded-full object-cover" src="/images/profile.png" alt="user icon" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{item.author}</div>
                              <div className="text-sm text-gray-500">{item.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-right text-sm font-medium">
                          <Link href={`/admin/edit-post/${item.slug}`} className="text-gray-500 hover:text-indigo-600">
                            Edit
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-right text-sm font-medium">
                          <a
                            href="#"
                            onClick={(e) => {
                              setdeleteModal(true);
                              setDeletePostId(item._id);
                            }}
                            className="text-gray-500 hover:text-indigo-600"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full border-gray-300">
          <div className="mt-2 flex items-center justify-end">
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
      {deleteModal && (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black bg-opacity-40">
              <div className="fixed inset-0 w-full h-full" />
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto px-4">
                <div className="bg-white rounded-md shadow-lg px-4 py-6">
                  <div className="flex items-center justify-end">
                    <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100" onClick={() => setdeleteModal(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="max-w-sm mx-auto space-y-3 text-center">
                    <h2 className="text-lg font-medium text-gray-800">Delete this Post?</h2>
                    <p className="text-sm text-gray-600">Are you sure?</p>
                    <button
                      onClick={handleDeletePost}
                      className="w-50 mt-3 mr-3 py-3 px-4 font-medium text-sm text-center text-white bg-red-500 hover:bg-black/80 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setdeleteModal(false)}
                      className="w-50 border mt-3 py-3 px-4 font-medium text-sm text-center text-black border-green-100 hover:bg-gray-400 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AllPosts;
