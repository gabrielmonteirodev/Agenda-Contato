import React, { useState } from "react";
import "./styles.css";
import { Button, Form, Input, Modal } from "antd";

interface Values {
  title: string;
  description: string;
  telNumber: string;
  cellNumber:string;
  modifier: string;
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
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
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
          name="Nome"
          label="Nome"
          rules={[
            { required: true, message: "Por favor, insira um nome para o seu contato" }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="Sobrenome" label="Sobrenome">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="DDD" label="DDD">
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
