import express from 'express';
import bodyParser from 'body-parser';
import { 
  graphqlExpress, 
  graphiqlExpress 
} from 'apollo-server-express';
import schema from './api/schema'; // Next step!

const app = express();
const port = 5000;
const GQL_PORT = port;
// process.env.PORT; // Where does this come from? .env file or we can hardcode with port 

// Where we will send all of our GraphQL requests
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// A route for accessing the GraphiQL tool
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(GQL_PORT, () => console.log(
  `GraphQL is now running on http://localhost:${GQL_PORT}/graphql`
));