import { Button } from 'antd';
import React, {useState} from 'react';
import api from '../services/contactService';
import CollectionCreateForm from '../forms/ContactForm';

const AddButton: React.FC = () => {
    const [open, setOpen] = useState(false);
    const onCreate = async (values: any) => {
      api.create(values)
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
          style={{marginRight:"0px",
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