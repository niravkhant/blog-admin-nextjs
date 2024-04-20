import styles from "@/components/users/Blogcard/CardContainer.module.css";
import CardBlog from "./CardSingleBlog";
import { getData } from "@/lib/data";

const CardContainer = async () => {

  const data = await getData("blog/get-all-blogs");
  return (
    <div className={styles["cardsContainer"]}>
      {data?.data.map(
        (item) =>
          item.status === "active" && (
            <CardBlog
              key={item._id}
              author={item.author}
              categories={item.categories}
              description={item.description}
              image={item.image}
              title={item.title}
              url={`/${item?.slug}`}
            />
          )
      )}
    </div>
  );
};

export default CardContainer;
