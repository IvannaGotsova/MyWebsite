import React from 'react'
import Services from "./Services";
import Header from "./Header";
import Footer from "./Footer";

function Home () {

    return (
        <div className="Home">
          <Header />
          <Services />
          <Services />
          <Services />
          <Services />
          <Footer />
        </div>
      );
}

export default Home