import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Space, Table, Button, message, Popconfirm } from "antd";
import type { ColumnsType } from "antd/es/table";
import api from "../services/contactService";
import { Contact } from "../models/contact";
import { useQuery } from "react-query";

interface ContactProperties{
  onDelete: () => void;
}

const ContactTable: React.FC<ContactProperties>= ({onDelete}) => {
  const confirm = () => {
    message.success('Contato deletado com sucesso!')
  }
  
  const cancel = () =>{
    message.error('Cancelado')
  }
  const { data } = useQuery("contactList", api.findAll);
  const columns: ColumnsType<Contact> = [
    {
      title: "Nome",
      dataIndex: "name",
    },
    {
      title: "Sobrenome/Apelido",
      dataIndex: "lastName",
    },
    {
      title: "Telefone",
      dataIndex: "tellNumber",
    },
    {
      title: "Celular",
      dataIndex: "cellNumber",
    },
    {
      title: "Observação",
      dataIndex: "observation",
    },
    {
      title:"Ações",
      dataIndex:"action",
      render: (id) => (
        <Space>
          <Popconfirm 
          title="Deseja deletar este contato?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Sim"
          cancelText="Não">
            <Button type="primary"><AiFillDelete size={'18px'} /></Button>
          </Popconfirm>
        </Space>
      ),
    }
  ];
  return (
    <Table rowKey={"id"} columns={columns} dataSource={data?.contacts} />
  )
}
export default ContactTable;