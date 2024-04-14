import SingleBlog from "@/components/users/SingleBlog/SingleBlog";
import { getData } from "@/lib/data";

const singlePostPage = async ({ params }) => {
  const blogdata = await getData(`blog/blog-detail/${params.slug}`);

  const {data} = blogdata;

  return <SingleBlog image={data?.image} updatedAt={data?.updatedAt} title={data?.title} description={data?.description} />;
};

export default singlePostPage;
