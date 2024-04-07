import styles from "@/components/users/Blogcard/CardContainer.module.css";

const CardContainer = ({ children, props }) => {
  return (
    <div className={styles["cardsContainer"]} style={{ gap: props?.gap }}>
      {children}
    </div>
  );
};

export default CardContainer;
