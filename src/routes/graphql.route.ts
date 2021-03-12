import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import { graphqlHTTP } from 'express-graphql';
import schema from '../graphql/schema';

class GraphQLRoute implements Route {
  path: string = '/graphql';
  router: Router = Router();

  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.use(
      this.path,
      graphqlHTTP({
        graphiql: true,
        schema: schema,
      }),
    );
  }
}

export default GraphQLRoute;
