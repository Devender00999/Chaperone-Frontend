import React from "react";
import Services from "../../components/Services";
import Footer from "../../styledComponents/Footer/Footer";
import Header from "../../styledComponents/Header/Header";

const Home = (props) => {
  return (
    <>
      <Header setUser={props.setUser} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
