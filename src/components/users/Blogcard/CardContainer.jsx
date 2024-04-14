import styles from "@/components/users/Blogcard/CardContainer.module.css";
import CardBlog from "./CardSingleBlog";
import { getData } from "@/lib/data";
// import { useAuth } from "@/context/ContextProvider";

const CardContainer = async () => {
  // const { blogs } = useAuth();

  const data = await getData("blog/get-all-blogs");
  // console.log(data);
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
            />
          )
      )}
    </div>
  );
};

export default CardContainer;
