import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopSection from "../components/homeComponents/ShopSection";

function HomeScreen() {
  window.scrollTo(0, 0);
  const { keyword = "", pagenumber = "" } = useParams();
  return (
    <div>
      <Header />
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <Footer />
    </div>
  );
}

export default HomeScreen;
