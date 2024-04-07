import styles from "@/components/users/Blogcard/CardSingleBlog.module.css";
import Image from "next/image";

const CardBlog = () => {
  return (
    <>
      <>
      <div className={styles["blogCardWidth"]}>
        <div className={`${styles["blogCardMain"]} ${styles["halfWidthCard"]}`}>
          <div className={styles["row"]}>
            <div className={styles["w-full"]}>
              <div className={styles["blogLeftPart"]}>
                <div className={styles["blogImageDiv"]}>
                  <Image
                    width={200}
                    height={100}
                    className={`${styles["img-fluid"]} ${styles["blog"]}`}
                    src="next.svg"
                    alt="blog img"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className={styles["blogRightPart"]}>
                <h3 className={styles["blogTitle"]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
                  omnis.
                </h3>

                <p className={styles["blogTag"]}>
                  <a className={styles["blogTagLink"]} href="">
                    Java Development
                  </a>
                </p>
                <div className={styles["blogAuthor"]}>
                  <span className={styles["blogAuthorName"]}>By Anna Smith</span> ●
                  <span className={styles["blogReadingTime"]}> 6 min to read</span>
                </div>
                <p className={styles["blogDescription"]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  eaque libero ex quae aut soluta, quas quaerat ullam ducimus
                  temporibus sapiente rem provident omnis atque aliquam quod
                  dolore labore voluptatum. Dolorem repellat repudiandae hic
                  quae quis, totam delectus quas suscipit.
                </p>
                <div className={styles["blogReadMoreDiv"]}>
                  <a href="#" className={styles["blogReadMoreBtn"]}>
                    Read More...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    </>
  );
};

export default CardBlog;
