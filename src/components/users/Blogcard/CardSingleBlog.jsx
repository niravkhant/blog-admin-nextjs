import styles from "@/components/users/Blogcard/CardSingleBlog.module.css";
import Image from "next/image";
import Link from "next/link";

const CardBlog = ({key1,author,categories,description,image,title, url=""}) => {
  return (
      <div className={styles["blogCardWidth"]} key={key1}>
        <div className={`${styles["blogCardMain"]} ${styles["halfWidthCard"]}`}>
          <div className={styles["row"]}>
            <div className={styles["w-full"]}>
              <div className={styles["blogLeftPart"]}>
                <div className={styles["blogImageDiv"]}>
                  <Image
                    width={200}
                    height={100}
                    className={`${styles["img-fluid"]} ${styles["blog"]}`}
                    src={image}
                    alt="blog img"
                  />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className={styles["blogRightPart"]}>
                <h3 className={styles["blogTitle"]}>
                  <Link href={url}>{title}</Link> 
                </h3>

                <p className={styles["blogTag"]}>
                  <a className={styles["blogTagLink"]} href="#">
                    {categories}
                  </a>
                </p>
                <div className={styles["blogAuthor"]}>
                  <span className={styles["blogAuthorName"]}>By {author}</span> ●
                  <span className={styles["blogReadingTime"]}> 6 min to read</span>
                </div>
                <p className={styles["blogDescription"]}>
                  {description}
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
  );
};

export default CardBlog;
