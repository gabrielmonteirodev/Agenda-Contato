import React, { useEffect, useState } from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Button, Form, Input, Modal } from "antd";
import api from "../services/contactService";
import { useMutation, useQuery } from 'react-query';
import { Contact } from "../models/contact";




type Props = {
  id: number | string;
}

interface Values {
  name: string;
  lastName: string;
  tellNumber: string;
  cellNumber: string;
  observation: string;
}



interface CollectionCreateFormProps {
  data: Contact | undefined
  onCreate: (values: Values) => void;
  onCancel: () => void;
}



const CollectionUpdateForm: React.FC<CollectionCreateFormProps> = ({
  data,
  onCreate,
  onCancel
}) => {
  const [setValue] = useState<string[]>([]);
  const [form] = Form.useForm(); 
  const {mutate}= useMutation(api.update);


  

  return (
    <Modal
      open={data !== undefined}
      title="Atualizando contato desejado"
      okText="Atualizar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
        .validateFields()
          .then((data) => {
            form.resetFields();
            mutate(data);
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
        initialValues={{ id: data?.id, 
          name: data?.name,
          lastName: data?.lastName,
          tellNumber: data?.tellNumber,
          cellNumber: data?.cellNumber,
          observation: data?.observation  }}
      >
        <Form.Item
          name="name"
          label="Nome"
          rules={[
            {required: true, message: "Por favor, insira um nome para o seu contato" }
          ]}
        >
          <Input value={data?.name} />
        </Form.Item>
        <Form.Item name="lastName"
          label="Sobrenome/Apelido"
          rules={[{
            required: true, message: "Insira um sobrenome para o seu contato"
          }]}
        >
          <Input type="textarea" value={data?.lastName} />
        </Form.Item>
        <Form.Item name="tellNumber"
          label="Telefone"
        >
          <PhoneInput
          placeholder=''
          defaultCountry="BR"
          values={data?.tellNumber}
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
          defaultCountry='BR'
          values={data?.cellNumber}
          onChange={(string)=>setValue}
        />
        </Form.Item>
        <Form.Item name ="observation" 
        label="OBS:"
        >
          <Input type="textarea" value={data?.observation} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CollectionUpdateForm;