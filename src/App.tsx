import React from "react";
import Header from "./components/Header";
import ContactCard from "./components/ContactCard";
import AddButton  from "./components/AddButton";
import RemoveButton from "./components/RemoveButton"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="contact">
          <div className="container-contact">
            <AddButton />
            <RemoveButton />            
            <ContactCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
