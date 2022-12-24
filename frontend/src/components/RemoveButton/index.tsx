import { Button, message, Popconfirm } from "antd";
import React from "react";

const text = 'Certeza que deseja deletar esses contatos?';

const confirm = () => {
  message.info('Contato deletado com sucesso.');
};

function RemoveButton() {
  return (
    <div className="agenda-button-remove">
      <Popconfirm placement="top" title={text} onConfirm={confirm} okText="Sim" cancelText="Não" >
        <Button
          style={{
            display: "inline-block",
            marginLeft: "6px",
            flexDirection: "row",
            position: "relative",
          }}
          danger
        >
          <span>Remover</span>
        </Button>
      </Popconfirm>
    </div>
  );
}

export default RemoveButton;
