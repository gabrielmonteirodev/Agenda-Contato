import React , { useEffect, useState }from "react";
import { Card, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import api  from "../../services/contactService";
import { useQuery } from "react-query";
import { Contact } from "../../models/contact";
import RemoveButton from "../RemoveButton";


interface ContacType {
  id: number;
  name: string;
  lastName: string;
  tellNumber: string;
  cellNumber:string;
  observation:string;
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
];


function ContactCard() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  useEffect(()=>{
    
    
  },[setSelectedRowKeys])

  const [selectionType] = useState<'checkbox'>('checkbox');  
  const {data}  = useQuery('contactType', api.findAll) 
  return (
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
          rowSelection={{
            type: selectionType,
            ...rowSelection,
            
          }}
          
          columns={columns}
          dataSource={data?.contacts}
        />
      </div>
    </Card>
  );
}

export default ContactCard;
