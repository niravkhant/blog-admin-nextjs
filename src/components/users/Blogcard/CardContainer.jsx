"use client";
import styles from "@/components/users/Blogcard/CardContainer.module.css";
import CardBlog from "./CardSingleBlog";
import { useAuth } from "@/context/contextProvider";

const CardContainer = () => {
  const { blogs } = useAuth();
  console.log(blogs);
  return (
    <div className={styles["cardsContainer"]}>
      {blogs?.map((item) => (
        item.status === "active" && <CardBlog
          key={item._id}
          author={item.author}
          categories={item.categories}
          description={item.description}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default CardContainer;
