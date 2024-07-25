import React from "react";
import Header from "./Components/Header.jsx";
import Body1 from "./Components/Body1.jsx";
import Body2 from "./Components/Body2.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div>
      {/* This is the host of all other pages */}
      <Header />
      <Body1 />
      <Body2 />
      <Footer />
    </div>
  );
}

export default App;
