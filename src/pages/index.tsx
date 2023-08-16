import Main from "../components/Templates/Main";
import Navbar from "../components/Organisms/Navbar";
import Contact from "../components/Templates/Contact";
import Footer from "../components/Templates/Footer";
import Partners from "../components/Templates/Partners";
import Solutions from "../components/Templates/Solutions";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Simple landing</title>
        <meta property="og:title" content="Titulo social de la landing" />
        <meta property="og:description" content="Descripcion social de la landing" />
        <meta name="description" content="Descripcion de landing" key="desc" />
        <meta property="og:image" content="https://example.com/images/cool-page.jpg" />
      </Head>
      <Navbar />
      <Main />
      <Solutions />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
