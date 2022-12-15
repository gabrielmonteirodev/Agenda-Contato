import React, { useState } from "react"
import { Button, Form, Input, Modal } from "antd";

interface Values {
  nome: string;
  sobreNome: string;
  tellNumber: string;
  cellNumber:string;
  observation: string;
}

interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  open,
  onCreate,
  onCancel
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Adicionando um novo contato"
      okText="Adicionar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: "public" }}
      >
        <Form.Item
          name="nome"
          label="Nome"
          rules={[
            { required: true, message: "Por favor, insira um nome para o seu contato" }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="sobrenome"
        label="Sobrenome"
        rules={[{
          required:true, message:"Insira um sobrenome para o seu contato" 
        }]}
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name ="tellNumber" 
        label="Telefone"
        >
          <Input  type="textarea"/>
        </Form.Item>
        <Form.Item name ="cellNumber" 
        label="Celular"
        rules={[{
          required:true, message:"Insira um numero de celular para o seu contato" 
        }]}
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name ="observation" 
        label="OBS:"
        >
          <Input type="textarea" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const AddButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  return (
    <div>
      <Button
        danger
        onClick={() => {
          setOpen(true);
        }}
        style={{marginRight:"10px",
      display:"flex"}}
      >
        Novo
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default AddButton;
