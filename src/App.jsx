import { useState } from "react";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import ThingsToDo from "./pages/ThingsToDo";
import Restaurants from "./pages/Restaurants";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import "./styles/App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "hotels":
        return <Hotels />;
      case "thingsToDo":
        return <ThingsToDo />;
      case "restaurants":
        return <Restaurants />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Banner />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}
