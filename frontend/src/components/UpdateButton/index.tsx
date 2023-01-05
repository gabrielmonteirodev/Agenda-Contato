import React, { useState } from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Button, Form, Input, Modal } from "antd";
import api from "../../services/contactService";
import { useMutation} from "react-query";

interface Values {
  name: string;
  lastName: string;
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
  const[value,setValue] = useState<string[]>([]);
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
        label="Sobrenome/Apelido"
        rules={[{
          required:true, message:"Insira um sobrenome para o seu contato" 
        }]}
        >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name ="tellNumber" 
        label="Telefone"
        >
        <PhoneInput
          placeholder=''
          values={value}
          onChange={(string)=>setValue}
        />

        </Form.Item>
        <Form.Item name ="cellNumber" 
        label="Celular"
        rules={[{
          required:true, message:"Insira um numero de celular para o seu contato" 
        }]}
        >
          <PhoneInput
          placeholder=''
          values={value}
          onChange={(string)=>setValue}
        />
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

const UpdateButton: React.FC = () => {
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
        style={{marginLeft:"7px",
      display:"flex"}}
      >
        Atualizar
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

export default UpdateButton;