import React from "react";
import { Row, Col } from "antd";
import Header from "./components/Header";
import ContactCard from "./components/ContactCard";
import AddButton from "./components/AddButton";

function App() {
  return (
      <>
        <Header />
        <main>
          <section id="contact">
            <div className="container-contact">
              <div className="container-contact-button">
                <Row justify="start">
                  <Col span={1.5}>
                    <AddButton />
                  </Col>
                </Row>
              </div>
              <div className="container-contact-card">
                <ContactCard />
              </div>
            </div>
          </section>
        </main>
      </>
  );
}

export default App;
