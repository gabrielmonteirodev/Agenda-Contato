import { Button, Popconfirm } from "antd";
import React from "react";
import api from '../../services/contactService'
import { useMutation } from "react-query";

const text = 'Certeza que deseja deletar esses contatos?';


function RemoveButton() {
  const { data } = useMutation('contactDelete', api.deleteById)
  return (
    <div className="agenda-button-remove">
      <Popconfirm placement="top" title={text} onConfirm={data} okText="Sim" cancelText="Não" >
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
