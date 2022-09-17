// "use strict"
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const path = require('path');
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public', // optional: default '/'
});

// Declare a route
fastify.get('/', function (req, reply) {
  reply.sendFile('index.html'); // serving path.join(__dirname, 'public', 'myHtml.html') directly
});
fastify.get('/css', function (req, reply) {
  reply.sendFile('assets/styles.css'); // serving path.join(__dirname, 'public', 'myHtml.html') directly
});
fastify.get('/js', function (req, reply) {
  reply.sendFile('assets/script.js'); // serving path.join(__dirname, 'public', 'myHtml.html') directly
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
