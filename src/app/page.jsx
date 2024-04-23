import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RecentWorks from "./components/RecentWorks";
import styles from "./page.module.scss";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import "animate.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Summary />
      <Services />
      <RecentWorks />
      <Resume />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
