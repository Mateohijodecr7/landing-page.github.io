import Header from '../components/header';
import Main from '../components/main';
import ImDiff from '../components/ImDiff';
import Projects from '../components/Projects';
import Footer from '../components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Main />
      <ImDiff />
      <Projects />
      <Footer />
    </>
  );
}
