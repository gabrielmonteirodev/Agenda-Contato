import { Button } from "antd";
import React from "react";
import "./styles.css";

function AddButton() {
  return (
    <div className="agenda-button-add">
      <Button danger>
        Novo
      </Button>
    </div>
  );
}

export default AddButton;
