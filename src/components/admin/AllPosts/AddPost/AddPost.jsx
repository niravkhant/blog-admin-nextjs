"use client";
import Link from "next/link";
import { useState } from "react";
import { makeApiCall } from "@/utils/makeApiCall";
import { useAuth } from "@/context/authContext";
import Loader2 from "@/components/loader/Loader2";
import { useRouter } from "next/navigation";

const AddPost = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    categories: "",
    image: null,
    status: "",
  });

  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      console.log(name ,value )
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const onSuccess = (res) => {
      console.log(res);
      setFormData({
        title: "",
        description: "",
        categories: "",
        image: "",
        status: "",
      });
      router.push("/admin/all-posts");
      console.log("Post created successfully");
    };
    const onError = (error) => {
      console.error("Error 400: Error in creating new post", error);
    };

    // setIsLoading(true);
    makeApiCall("POST", "blog/create-blog", formData, onSuccess, onError);
    // setIsLoading(false);
  };

  const [modalShow, setModalShow] = useState("");

  const handlePopupOpen = (e) => {
    e.preventDefault();
    let attrval = e.target.getAttribute("model-target");
    setModalShow(attrval);
  };
  return (
    <>
      <section>
        <div className="flex items-center justify-center">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-lg">
            <h2 className="text-center text-2xl font-bold leading-tight text-black">Add New Post</h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Want to view all posts?
              <Link href="/admin/all-posts" className="font-medium text-black transition-all duration-200 hover:underline">
                View all
              </Link>
            </p>
            <form className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="title" className="text-base font-medium text-gray-900">
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      id="title"
                      placeholder="Blog Title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="description" className="text-base font-medium text-gray-900">
                    Description
                  </label>
                  <div className="mt-2">
                    <textarea
                      className="flex h-24 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Blog Description"
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="category" className="text-base font-medium text-gray-900">
                      Category
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      name="categories"
                      id="category"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.categories}
                      onChange={handleInputChange}
                    >
                      <option className="text-gray-400" value="" disabled selected hidden>
                        Select Category
                      </option>
                      <option value="sports">sports</option>
                      <option value="jobs">jobs</option>
                    </select>
                  </div>
                  <div className="mt-2">
                    <button
                      className="inline-flex items-center justify-center rounded-md bg-black px-2.5 py-1 text-sm leading-7 text-white hover:bg-black/80"
                      onClick={handlePopupOpen}
                      model-target="addcategory"
                    >
                      Add new category
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="imagefile" className="text-base font-medium text-gray-900">
                    Image
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="file"
                      id="imagefile"
                      placeholder="Blog Image"
                      name="image"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      Status
                    </label>
                  </div>
                  <div className="mt-2 flex gap-4 items-center">
                    <div className="flex gap-2">
                      <input type="radio" name="status" id="active" value="active" onChange={handleInputChange} />
                      <label htmlFor="active">Active</label>
                    </div>
                    <div className="flex gap-2">
                      <input type="radio" name="status" id="inactive" value="inactive" onChange={handleInputChange} />
                      <label htmlFor="inactive">Inactive</label>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Add new post
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {isLoading && <Loader2 />}
      </section>
      {modalShow === "addcategory" && (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black bg-opacity-40">
              <div className="fixed inset-0 w-full h-full" />
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto px-4">
                <div className="bg-white rounded-md shadow-lg px-4 py-6">
                  <div className="flex items-center justify-end">
                    <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100" onClick={() => setModalShow(false)}>
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
                    <h2 className="text-lg font-medium text-gray-800">Add new category</h2>
                    <p className="text-sm text-gray-600">Add new category to show in select options</p>
                    <div className="relative text-start">
                      <label className="text-start px-1" htmlFor="newcategory">
                        New Category
                      </label>
                      <input
                        className="w-full mt-1 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        placeholder="category name"
                        id="newcategory"
                      />
                    </div>
                    <button className="w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-black hover:bg-black/80 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2">
                      Add category
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

export default AddPost;
