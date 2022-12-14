import { Button } from "antd";
import React from "react";


function RemoveButton() {
  return (
    <div className="agenda-button-remove">
      <Button  style={{display:'inline-block',
      marginLeft:'0%',
      flexDirection:'row',
      position:'relative'    
      }} danger>
        <span>Remover</span>
      </Button>
    </div>
  );
}

export default RemoveButton;
