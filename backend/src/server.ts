import { PrismaClient } from "@prisma/client";
import fastify from "fastify";

const app = fastify();
const prisma = new PrismaClient();

export type contact={
    id : number
    name : string
    lastName: string
    tellNumber : string
    cellNumber: string
    observation: string
}

app.register(require('@fastify/cors'), {
    origin: true,
    allowedHeaders: [
        'Origin', 
        'X-Requested-With', 
        'Accept', 
        'Content-Type', 
        'Authorization'
    ],
    methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'],
  });

app.get ('/contact', async(req,res)=>{
    const contacts= await prisma.contato.findMany()
    console.log(contacts)
    return {contacts}    
})

app.get('/contact/:id', async (req,res) =>{
    const {id} = req.params as contact 
    console.log(id)
    const post= await prisma.contato.findUnique({
        where:{id: Number(id)}
    })    
    return(post)
})

app.post('/contact/create',async(req,res)=>{
    const {name, lastName, tellNumber, cellNumber,observation } = req.body as contact
    const newContact = await prisma.contato.create({
        data: {
            name,
            lastName,
            tellNumber,
            cellNumber,
            observation
        }
    })
    return(newContact)
})

app.put('/contact/update/:id', async (req,res) =>{
    const {id} = req.params as contact 
    console.log(id)
    const contactUpdate= await prisma.contato.update({
        where: {id: Number(id)},
        data: {...req.body as contact}
    })    
    return(contactUpdate)
})

app.delete('/contact/delete/:id', async(req,res) =>{
    const {id} = req.params as contact
    const contactDelete = await prisma.contato.delete({
        where : {id :Number(id)}
    })
})


app.listen({port:3001}, async(err,address)=>{
    if(err){
        console.error(err)
        process.exit(1)
    }
    else
        console.log(`Server rodando na porta ${address}`)
})