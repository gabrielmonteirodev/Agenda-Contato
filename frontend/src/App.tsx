import React from "react";
import { Row, Col } from "antd";
import Header from "./components/header";
import ContactCard from "./components/card";
import AddButton from "./buttons/addButton";




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
                    <AddButton/>                       
                  </Col>
                </Row>
              </div>
              <div className="container-contact-card">
                <ContactCard/>                
              </div>
            </div>
          </section>
        </main>
      </>
  );
}

export default App;
