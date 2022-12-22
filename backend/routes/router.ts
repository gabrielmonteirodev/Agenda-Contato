import fastify from "fastify"

const app = fastify();

app.post('/contact', async(request,reply) =>{
    return{create:'Cria se um contato'}
  })
  
  app.get('/contact', async (request, reply) => {
    return {consume:'Le-se todos os contatos'}
  })
  
  app.put('/contact/:id', async(requst,reply) =>{
    return {update:'Atualiza-se o contato do ID'}
  })

  app.delete('/contact/:id', (request,reply)=>{
    return {delete:'Deleta-se o contato do ID'}
  })