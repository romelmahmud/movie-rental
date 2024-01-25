import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/cine/MovieList";
import { MovieContext, ThemeContext } from "./context/index";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <ThemeContext.provider>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Header />
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              <MovieList />
            </div>
          </main>
          <Footer />
        </MovieContext.Provider>
      </ThemeContext.provider>
    </>
  );
}

export default App;
