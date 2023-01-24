import React from 'react';
import {Card, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import api from '../services/contactService';
import { useQuery } from 'react-query';
import { Contact } from '../models/contact';
import RemoveButton from '../buttons/removeButton';

interface ContacType {
    id: number;
    name: string;
    lastName: string;
    tellNumber: string;
    cellNumber: string;
    observation: string;
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
        title: "Ações",
        key: "action",
        dataIndex: "id",
        render: (id) => (
          <Space>
            <RemoveButton id={id} />
          </Space>
        ),
    }
]

function ContactCard(){
    const{data} =useQuery('contactList', api.findAll);
    return(
        <Card
        style={{
          width: "100%",
          height: 500,
          borderColor: "red",
          marginTop: 10,
        }}
      >
        <div>
          <Table 
          rowKey={"id"} 
          columns={columns} 
          dataSource={data?.contacts} />
        </div>
      </Card>
    )
}

export default ContactCard;