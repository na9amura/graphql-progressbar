
import { GraphQLClient } from 'graphql-request'

const url = 'http://localhost:4000/graphql'
// const url = '//server/graphql'
const options = { headers: {} }
const client = new GraphQLClient(url, options)

export const changeProgress = async (command: 'start' | 'cancel'): Promise<boolean> => {
  const query = `
    mutation {
      cmd(input: "${command}") {
        result
      }
    }
  `
  const { cmd: { result } } = await client.request(query)
  return result
}

export const getProgress = async (): Promise<number> => {
  const { progress } = await client.request('{ progress }')
  return progress
}
