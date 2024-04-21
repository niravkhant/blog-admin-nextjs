import Popup from "@/components/common/Popup";
import CardContainer from "@/components/users/Blogcard/CardContainer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main max-w-screen-xl mx-auto">
      <div className="section-heading my-5">
        <h3 className="section-title text-2xl text-slate-700 font-bold text-center">Latest Posts</h3>
      </div>
      <CardContainer />
    </main>
  );
}
