import { GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import charactersResolver from './characterResolver';

const characterType = new GraphQLObjectType({
  name: 'Character',
  fields: {
    name: {
      type: GraphQLString,
    },
    height: {
      type: GraphQLString,
    },
    hairColor: {
      type: GraphQLString,
    },
  },
});

const charactersType = new GraphQLObjectType({
  name: 'Characters',
  fields: {
    items: {
      type: GraphQLList(characterType),
    },
  },
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'query',
    fields: {
      characters: {
        args: {
          name: {
            type: GraphQLString,
          },
        },
        type: charactersType,
        async resolve(_, args: { name: string }) {
          return charactersResolver(args);
        },
      },
    },
  }),
});

export default schema;
