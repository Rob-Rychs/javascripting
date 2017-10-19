import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers'; // Next step!
const typeDefs = `
  type Person {
    id: ID!
    name: String!
    birthday: String
    placeOfBirth: String
    bio: String
    filmography: [Movie]
  }
  type Movie {
    id: ID!
    title: String!
    releaseDate: String
    stars: [Person]
    director: Person
  }
  type Query {
    people: [Person]
    person(id: ID!): Person
    movies: [Movie]
    movie(id: ID!): Movie
  }
`;
export default makeExecutableSchema({
  typeDefs,
  resolvers,
});