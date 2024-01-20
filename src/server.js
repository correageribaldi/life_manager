// Importar o Fastify
const fastify = require('fastify')({
    logger: true // Ativa o logging
  });
  
  // Importar a função de conexão com o banco de dados
  const { connectToDb } = require('./config/db');
  
  // Declarar uma rota básica
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
  });
  
  // Função para iniciar o servidor e conectar ao banco de dados
  const start = async () => {
    try {
      // Estabelece a conexão com o banco de dados antes do servidor iniciar
      await connectToDb();
      
      // O servidor escutará na porta 3000
      await fastify.listen(3000);
      fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };
  
  // Iniciar o servidor
  start();
  