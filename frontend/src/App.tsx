import React from "react";
import { Row, Col } from "antd";
import Header from "./components/Header";
import ContactCard from "./components/ContactCard";
import AddButton from "./components/AddButton";
import RemoveButton from "./components/RemoveButton";
import UpdateButton from "./components/UpdateButton";

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
                  <Col span={1.5}>
                    <RemoveButton />
                  </Col>
                  <Col span={1.5}>
                    <UpdateButton />
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
