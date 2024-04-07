import CardContainer from "@/components/users/Blogcard/CardContainer";
import CardBlog from "@/components/users/Blogcard/CardSingleBlog";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main max-w-screen-xl mx-auto">
      <CardContainer>
        <CardBlog/>
        <CardBlog/>
        <CardBlog/>
        <CardBlog/>
        <CardBlog/>
      </CardContainer>
    </main>
  );
}
