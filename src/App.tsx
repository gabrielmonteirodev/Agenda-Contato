import React from "react";
import Header from "./components/Header";
import ContactCard from "./components/ContactCard";
//const AddButton = require('./components/AddButton');
import AddButton from "./components/AddButton";
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="contact">
          <div className="container-contact">
            <ContactCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
