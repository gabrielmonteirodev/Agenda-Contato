import React, { useState } from "react";
import ContactTable from "../tables/table";
import ContactForm from "../forms/ContactForm";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { Contact } from '../models/contact';
import api from '../services/contactService'
import { Button } from "antd";



async function loadContact(id: number | null) {
  if (id === null) {
    return null;
  } else {
    const contact = await api.findById(id)
    return (contact)
  }
}

async function saveContact(contact: Contact): Promise<Contact> {
  if (!contact.id) {
    const createContact =  api.create(contact)
    return (createContact)
  } else{
    const updateContact = api.update(contact)
    return (updateContact)
  }
}

export default function ContactPage() {
  const [id, setId] = useState<number | null>(null);
  const [newContact, setNewContact] = useState<Contact | null>(null);
  const queryClient = useQueryClient();

  const contactsList = useQuery(["contacts"], api.findAll)

  const contact = useQuery(['contactById', id], () => loadContact(id))

  const mutation = useMutation<Contact, Error, Contact>({
    mutationFn:saveContact,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["contacts"]});
      close()
    }
  });
  const close= () =>{
    setId(null);
    setNewContact(null)
  }

  const remove= (id:number) =>{
    api.deleteById(id).then(()=>{
      queryClient.invalidateQueries({queryKey:["contacts"]});
    })
  }
  const create=() =>{
    setNewContact({
      name:"",
      lastName:"",
      tellNumber:"",
      cellNumber:"",
      observation:"",})
  }
  const edit =(id:number)=>{
    setId(id)
  }
  const save = (contact:Contact) => {
    mutation.mutate(contact)
  }
  const editing = contact.data || newContact;

  return(
    <div>
      <Button danger
      onClick={create} style={{marginRight:"0px",
        display:"flex"}}> Novo </Button>
      <ContactTable onEdit={edit} data= {contactsList.data || []} onDelete={remove}/>
      {editing !== null ?(
        <ContactForm contact={editing} onCancel={close} onSave={save} />
      ): null}
    </div>
  )
}