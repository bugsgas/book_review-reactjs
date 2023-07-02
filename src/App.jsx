import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Hero from "./component/Hero";
import Popular from "./component/Popular";
import Latest from "./component/Latest";
import Recommended from "./component/Recommended";
import Footer from "./component/Footer";
import Testimony from "./component/Testimony";

import { bookList, bookList2 } from "./component/helper/data";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Hero />
      <Popular booklist={bookList} />

      <Recommended />
      <Testimony />
      <Footer />
    </>
  );
}

export default App;
