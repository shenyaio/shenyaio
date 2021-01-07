import { Layout } from "components";
import styles from "styles/Home.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={styles.left}>
        <img src="logo.svg" alt="Logo" />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>Shenya</div>
        <div className={styles.subtitle}>深雅</div>
      </div>
      <div className={styles.description}>Coming soon...</div>
    </Layout>
  );
};

export default Home;
