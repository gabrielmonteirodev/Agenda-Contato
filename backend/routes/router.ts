import fastify from "fastify"

const app = fastify();

app.post('/contact/create', async(request,reply) =>{
    return{create:'Cria se um contato'}
  })
  
  app.get('/contact', async (request, reply) => {
    return {consume:'Le-se todos os contatos'}
  })
  
  app.put('/contact/update/:id', async(requst,reply) =>{
    return {update:'Atualiza-se o contato do ID'}
  })

  app.delete('/contact/delete/:id', (request,reply)=>{
    return {delete:'Deleta-se o contato do ID'}
  })