import React, { Suspense } from "react";
import Image from "next/image";
import { formatDate } from "@/utils/date.js";

const SingleBlog = ({ description, title, updatedAt, image }) => {
  return (
    <section className="w-full relative overflow-hidden py-20">
      <div className="relative">
        <div className="mx-auto max-w-xl lg:max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-black">OUR BLOG</span>
            <h1 className="text-5xl font-bold">Latest news from our blog</h1>
          </div>
          <div className="my-18 -mx-4 flex flex-wrap px-4">
            <div className="mb-12 w-full px-4 lg:mb-0 lg:w-2/3">
              <a className="group block w-full" href="#">
            
                  <Image className="mb-5 block w-full rounded-lg" src={image} alt="blog detail" width={500} height={500} />
                  <span className="mb-5 block text-gray-500">Last updated: {formatDate(updatedAt)}</span>
                  <h4 className="mb-5 text-3xl font-semibold text-gray-900">{title}</h4>
                  <p className="w-full text-lg text-gray-500">{description}</p>
           
              </a>
            </div>
            <div className="w-full px-4 lg:w-1/3">
              <a className="group mb-8 md:flex" href="#">
                <Image
                  className="h-40 w-48 rounded-lg"
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="my-4 pt-2 md:ml-6 md:mt-0">
                  <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                  <h4 className="text-xl font-semibold text-gray-900">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                </div>
              </a>
              <a className="group mb-8 md:flex" href="#">
                <Image
                  className="h-40 w-48 rounded-lg"
                  src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="my-4 pt-2 md:ml-6 md:mt-0">
                  <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                  <h4 className="text-xl font-semibold text-gray-900">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                </div>
              </a>
              <a className="group mb-8 md:flex" href="#">
                <Image
                  className="h-40 w-48 rounded-lg"
                  src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="my-4 pt-2 md:ml-6 md:mt-0">
                  <span className="mb-2 block text-gray-500">Jul 20, 2022</span>
                  <h4 className="text-xl font-semibold text-gray-900">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                </div>
              </a>
            </div>
          </div>
          <div className="mt-14 text-center">
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
