"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { makeApiCall } from "@/utils/makeApiCall";
import { useAuth } from "@/context/ContextProvider";
import Loader2 from "@/components/loader/Loader2";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";
import AddCategory from "@/components/common/AddCategory";

const AddPost = async ({data}) => {
  console.log(data)
  const router = useRouter();
  const { isLoading, setIsLoading } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    categories: "",
    image: null,
    status: "",
  });
  const [blogCategory, setBlogCategory] = useState();
  const [modalShow, setModalShow] = useState("");

  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      console.log(name, value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const onSuccess = (res) => {
      toast.success(`${res.message}`, {
        progress: undefined,
        transition: Bounce,
      });
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
      console.error("Error 400: Error in creating new post", error.response);
      toast.error(`${error.response.data.message}`, {
        progress: undefined,
        transition: Bounce,
      });
    };

    // setIsLoading(true);
    makeApiCall("POST", "blog/create-blog", formData, onSuccess, onError);
    // setIsLoading(false);
  };

  const fetchAllCategory = async () => {
    const onSuccess = (res) => {
      console.log(res);
      setBlogCategory(res.data);
    };
    const onError = (error) => {
      console.error("Error 409: Blog Categories Fetch error", error);
    };
    await makeApiCall("GET", "blog/get-blogcategory", {}, onSuccess, onError);
  };

  const handlePopupOpen = (e) => {
    e.preventDefault();
    let attrval = e.target.getAttribute("model-target");
    setModalShow(attrval);
  };
  useEffect(() => {
    fetchAllCategory();
    setFormData({
      title: data.title,
      description: data.description,
      categories: data.categories,
      image: data.image,
      status: data.status,
    })
  }, []);
  return (
    <>
      <section>
        <div className="flex items-center justify-center">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-lg">
            <h2 className="text-center text-2xl font-bold leading-tight text-black">Edit Post</h2>
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
                      className="flex h-10 capitalize w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.categories}
                      onChange={handleInputChange}
                    >
                      <option className="text-gray-400" value="" disabled selected hidden>
                        Select Category
                      </option>
                      {blogCategory?.map((category) => (
                        <option value={category.name}>{category.name}</option>
                      ))}
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
                      <input type="radio" name="status" id="active" value="active" onChange={handleInputChange} checked={formData.status === "active"} />
                      <label htmlFor="active">Active</label>
                    </div>
                    <div className="flex gap-2">
                      <input type="radio" name="status" id="inactive" value="inactive" onChange={handleInputChange} checked={formData.status === "inactive"} />
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
      {modalShow === "addcategory" && <AddCategory onclick={() => setModalShow(false)} afterSubmitCall={fetchAllCategory()} />}
    </>
  );
};

export default AddPost;
