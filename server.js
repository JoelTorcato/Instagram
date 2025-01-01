import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify() 
const database = new DatabaseMemory() // Important (new)

server.post('/post', (request, reply) => {

  const { description, location, tagged, account} = request.body

  database.create({
    description,
    location,
    tagged,
    account
  })

  return reply.status(201).send()
})

server.listen({
  port: 3333,
})

// http://localhost:3333/