import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-800 dark:text-white overflow-hidden">
      <Cursor />
      <Header />
      <Hero />
      <Skills />
      <ContactForm />
      <Footer />
    </main>
  );
}
