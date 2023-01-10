import React, { useEffect, useState } from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Button, Form, Input, Modal } from "antd";
import api from "../../services/contactService";
import { useMutation} from 'react-query';



type Props = {
  id: number | string;
}

interface Values {
  id: number;
  name: string;
  lastName: string;
  tellNumber: string;
  cellNumber: string;
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
  const [setValue] = useState<string[]>([]);
  const [form] = Form.useForm(); 
  const {mutate, data}= useMutation(api.update);


  useEffect(() => {
    if(data){
      mutate({
      id: data?.id, 
      name: data?.name,
      lastName: data?.lastName,
      tellNumber: data?.tellNumber,
      cellNumber: data?.cellNumber,
      observation: data?.observation
    });
    }
  }, [data])

  return (
    <Modal
      open={open}
      title="Atualizando contato desejado"
      okText="Atualizar"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((data) => {
            form.resetFields();
            onCreate(data);
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
          observation: data?.observation }}
      >
        <Form.Item
          name="name"
          label="Nome"
          rules={[
            { required: true, message: "Por favor, insira um nome para o seu contato" }
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

const UpdateButton: React.FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };


  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
        style={{marginRight:"2px",
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