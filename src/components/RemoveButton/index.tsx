import { Button } from "antd";
import React from "react";
import "./styles.css"

function RemoveButton() {
  return (
    <div className="agenda-button-remove">
      <Button danger>
        Remover
      </Button>
    </div>
  );
}

export default RemoveButton;
