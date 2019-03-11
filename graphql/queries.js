const { GraphQLObjectType } = require('graphql');

// Task
const taskGetAll = require('./queries/task/getAll');
const taskGetById = require('./queries/task/getById');

// User
const userGetAll = require('./queries/user/getAll');
const userGetById = require('./queries/user/getById');

const Query = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    taskGetAll,
    taskGetById,

    userGetAll,
    userGetById
  }
});

module.exports = Query;
