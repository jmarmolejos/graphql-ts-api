import 'dotenv/config';
import App from './app';
import GraphQLRoute from './routes/graphql.route';
import validateEnv from './utils/validateEnv';

validateEnv();

try {
  const app = new App([new GraphQLRoute()]);

  app.listen();
} catch (error) {
  console.log(error);
}
