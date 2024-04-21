import Header from "./components/Header";
import RecentWorks from "./components/RecentWorks";
import Services from "./components/Services";
import Summary from "./components/Summary";
import "animate.css";
import styles from "./page.module.scss";
import Resume from "./components/Resume";

const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Summary />
      <Services />
      <RecentWorks />
      <Resume />
    </main>
  );
};

export default Home;
