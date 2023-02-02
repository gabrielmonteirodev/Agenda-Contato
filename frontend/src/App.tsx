import React from "react";
import Header from "./components/header";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="contact">
          <div className="container-contact-card">
            <ContactPage />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
