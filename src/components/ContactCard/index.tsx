import React , { useState }from "react";
import { Card, Radio, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./styles.css";

interface DataType {
  key: React.Key;
  name: string;
  lastName: string;
  tellNumber: string;
  cellNumber:string;
  observation:string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Nome",
    dataIndex: "name",
  },
  {
    title: "Sobrenome",
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

const data: DataType[] = [
  {
    key: "1",
    name: "Gabriel",
    lastName: "Monteiro de Matos",
    tellNumber: "6133822208",
    cellNumber: "61993683423",
    observation: "Estagiario Suporte"
  },
  {
    key: "2",
    name: "Thiago",
    lastName: "Araujo",
    tellNumber: "6133688252",
    cellNumber: "61988285758",
    observation: "Analista de TI"
  },
  {
    key: "3",
    name: "Lucas",
    lastName: "D'Avila",
    tellNumber: "6138928462",
    cellNumber: "61987522348",
    observation: "Analista de TI"
  },
  {
    key: "4",
    name: "Diogo",
    lastName: "Costa",
    tellNumber: "6136985225",
    cellNumber: "61999845248",
    observation: "Analista de TI"
  },

];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
function ContactCard() {
  const [selectionType, setSelectionType] = useState<'radio'>('radio');  
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
          dataSource={data}
        />
      </div>
    </Card>
  );
}

export default ContactCard;
