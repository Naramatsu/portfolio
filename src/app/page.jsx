import Header from "./components/Header";
import Services from "./components/Services";
import Summary from "./components/Summary";
import styles from "./page.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Summary />
      <Services />
    </main>
  );
};

export default Home;
