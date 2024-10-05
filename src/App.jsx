import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Transition from "./components/Transitions";
import Loading from "./components/Loading";
import Header from "./pages/Header";
import Work from "./pages/Work";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Transition>
          <Header />
          <Navbar />
          <Home />
          <Work />
          <Tools />
          <Testimonials />
          <Contact />
          <Footer />
        </Transition>
      )}
    </>
  );
}

export default App;
