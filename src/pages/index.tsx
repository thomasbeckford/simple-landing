import Main from "../components/Templates/Main";
import Navbar from "../components/Organisms/Navbar";
import Contact from "../components/Templates/Contact";
import Footer from "../components/Templates/Footer";
import Partners from "../components/Templates/Partners";
import Solutions from "../components/Templates/Solutions";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <Solutions />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
