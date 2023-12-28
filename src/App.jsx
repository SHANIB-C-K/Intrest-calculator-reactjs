// THis is importing section
import React from "react";
import HomeScreen from "./components/HomeScreen";
import HomeScreen from "./components/HomeScreen";

function App() {
  // background image adding section
  const BgImg = {
    backgroundImage:
      "url(" +
      "https://imgs.search.brave.com/o-QsF6mUY7hQVIrclK7-xNoevSwbt-v5HhQgBhAmH4g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y29ycG9yYXRlZmlu/YW5jZWluc3RpdHV0/ZS5jb20vYXNzZXRz/L0ludGVyZXN0Lmpw/ZWc" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={BgImg}>
        {/* This is HomeScreen page */}
        <HomeScreen />
      </div>
    </>
  );
}

export default App;
