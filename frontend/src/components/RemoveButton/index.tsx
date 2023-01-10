import { Button, Popconfirm } from "antd";
import React, {useState} from "react";
import api from '../../services/contactService'

const text = 'Certeza que deseja deletar esse contato?';


type Props ={
  id:any;
}

function RemoveButton(props:Props) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    setConfirmLoading(true);    
    console.log(setConfirmLoading)
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);

    try{
      await api.deleteById(props.id);
      setOpen(false);
    } catch(error){
      console.log(error)
    }
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <div className="agenda-button-remove">
      <Popconfirm
      title={text}
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
        <Button
          style={{
            display: "inline-block",
            marginRight: "2px",
            flexDirection: "row",
            position: "relative",
          }}
          type="primary"
          onClick={showPopconfirm}
        >
          <span>Remover</span>
        </Button>
      </Popconfirm>
    </div>
  );
}

export default RemoveButton;
