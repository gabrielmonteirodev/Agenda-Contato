import React , { useState }from "react";
import { Card, Radio, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import api  from "../../services/contactService";
import { useQuery } from "react-query";


interface contactType {
  id: number;
  name: string;
  lastName: string;
  tellNumber: string;
  cellNumber:string;
  observation:string;
}

const columns: ColumnsType<contactType> = [

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




const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: contactType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
function ContactCard() {
  const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');  
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
        <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value);
          }}
          value={selectionType}
        >
        </Radio.Group>

        <Table
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
