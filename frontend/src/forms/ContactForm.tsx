import React, { useEffect, useState } from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Form, Input, Modal } from "antd";
import { Contact } from "../models/contact";

  
  interface CollectionCreateFormProps {
    contact:Contact;
    onCancel: () => void;
    onSave: (contact:Contact) => void;
  }
  
  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    contact,
    onCancel,
    onSave
  }) => {
    const[setValue] = useState<string[]>([]);
    const [form] = Form.useForm();

    useEffect(()=>{
      form.setFieldsValue(contact);
    }, [contact, form])

    return (
      <Modal
        title="Adicionando um novo contato"
        okText="Adicionar"
        cancelText="Cancelar"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              onSave({ ...values, id:contact.id})
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        open
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