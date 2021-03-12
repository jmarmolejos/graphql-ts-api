"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_graphql_1 = require("express-graphql");
const schema_1 = __importDefault(require("../graphql/schema"));
class GraphQLRoute {
    constructor() {
        this.path = '/graphql';
        this.router = express_1.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.use(this.path, express_graphql_1.graphqlHTTP({
            graphiql: true,
            schema: schema_1.default,
        }));
    }
}
exports.default = GraphQLRoute;
//# sourceMappingURL=graphql.route.js.map