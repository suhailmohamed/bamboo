import React, { Fragment } from "react";
import Header from "./pages/common-components/header/Header";
import './App.scss'
import Home from "./pages/home/Home";
import Footer from "./pages/common-components/footer/Footer";


const App = () => {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
};

export default App;