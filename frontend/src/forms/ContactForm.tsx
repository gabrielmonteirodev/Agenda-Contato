import React, { useState } from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Form, Input, Modal } from "antd";



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
    const[setValue] = useState<string[]>([]);
    const [form] = Form.useForm();
    //const {data} = useMutation('contactCreate', api.create)
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
            name="name"
            label="Nome"
            rules={[
              { required: true, message: "Por favor, insira um nome para o seu contato" }
            ]}
          >
            <Input  />
          </Form.Item>
          <Form.Item name="lastName"
          label="Sobrenome/Apelido"
          rules={[{
            required:true, message:"Insira um sobrenome para o seu contato" 
          }]}
          >
            <Input type="textarea"  />
          </Form.Item>
          <Form.Item name ="tellNumber" 
          label="Telefone"
          >
          <PhoneInput
            placeholder=''
            defaultCountry="BR"
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
            defaultCountry="BR"
            onChange={(string)=>setValue}
          />
          </Form.Item>
          <Form.Item name ="observation" 
          label="OBS:"
          >
            <Input type="textarea"/>
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  export default CollectionCreateForm;