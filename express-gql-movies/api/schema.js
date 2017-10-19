import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers'; // Next step!
const typeDefs = `
  # Your schema goes here...
`;
export default makeExecutableSchema({
  typeDefs,
  resolvers,
});