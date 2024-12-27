import { fastify } from 'fastify'

const server = fastify() 

server.get('/', () => {
  return 'Hello World'
})

server.listen({
  port: 3333,
})

// http://localhost:3333/