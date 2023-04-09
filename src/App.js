import React, { useState } from "react";
import Confirmation from "./Confirmation";
import Cart from "./Cart";
import Browse from "./Browse";

function App() {
  const [view, setView] = useState("browse");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => handleViewChange("browse")}>Browse</button>
        <button onClick={() => handleViewChange("cart")}>Cart</button>
        <button onClick={() => handleViewChange("confirmation")}>
          Confirmation
        </button>
      </nav>
      {view === "browse" && <Browse />}
      {view === "cart" && <Cart />}
      {view === "confirmation" && <Confirmation />}
    </div>
  );
}

export default App;
