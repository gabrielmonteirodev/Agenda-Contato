import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Space, Table, Button, message, Popconfirm } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Contact } from "../models/contact";


interface ContactProperties{
  onDelete: (id:number) => void;
  data?:Contact[];
  onEdit:(id:number) =>void;
}

const ContactTable: React.FC<ContactProperties>= ({onDelete, data, onEdit}) => {
  const confirm = (id:number) => {
    onDelete(id)
    message.success('Contato deletado com sucesso!')
  }
  
  const cancel = () =>{
    message.error('Cancelado')
  }
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
      dataIndex:"id",
      render: (id) => (
        <Space>
          <Popconfirm 
          title="Deseja deletar este contato?"
          onConfirm={()=>{confirm(id)}}
          onCancel={cancel}
          okText="Sim"
          cancelText="Não">
            <Button type="primary"><AiFillDelete size={'18px'} /></Button>
          </Popconfirm>
          <Button onClick={()=>{onEdit(id)}} type= {"primary"}>Editar</Button>
        </Space>
      ),
    }
  ];
  return (
    <Table rowKey={"id"} columns={columns} dataSource={data} />
  )
}
export default ContactTable;