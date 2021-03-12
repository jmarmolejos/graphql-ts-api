"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const characterType = new graphql_1.GraphQLObjectType({
    name: 'Character',
    fields: {
        name: {
            type: graphql_1.GraphQLString,
        },
    },
});
const schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: 'query',
        fields: {
            character: {
                type: characterType,
                resolve() {
                    return { name: 'Luke' };
                },
            },
        },
    }),
});
exports.default = schema;
//# sourceMappingURL=schema.js.map