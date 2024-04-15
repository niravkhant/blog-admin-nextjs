import React from "react";
import EditPost from "@/components/admin/AllPosts/AddPost/EditPost";
import { getData } from "@/lib/data";

const editPostPage = async ({ params }) => {
  const blogdata = await getData(`blog/blog-detail/${params.slug}`);
  // const { data } = blogdata;
  return <EditPost data={blogdata?.data} sludId={params.slug} />;
};

export default editPostPage;
