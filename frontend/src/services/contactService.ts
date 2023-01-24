import axios from "axios";
import { Contact }  from "../models/contact";

const apiClient = axios.create({
  baseURL:"http://127.0.0.1:3001",
  headers:{"Content-type":"application/json",}
});

const findAll = async()=>{
    const response = await apiClient.get<{contacts : Contact[]}>('/contact')
    return response.data;
}

const findById = async(id:any)=>{
    const response = await apiClient.get<Contact>(`/contact/${id}`)
    return response.data;
}

const create = async({id, name,lastName, tellNumber, cellNumber, observation }: Contact ) => {
    const response = await apiClient.post<any>(`/contact/create/`, {id,name, lastName, tellNumber,cellNumber,observation})
    return response.data;
}

const update = async ({id,name,lastName, tellNumber, cellNumber, observation }: Contact):Promise<Contact> =>{
    const response = await apiClient.put<any>(`/contact/update/${id}`, {name,lastName, tellNumber, cellNumber, observation })
    return response.data;
}

const deleteById = async (id:any) => {
    const response = await apiClient.delete<any>(`/contact/delete/${id}`)
    return response.data;
}

const ContactService={
    findAll,
    findById,
    create,
    update,
    deleteById
}

export default ContactService;