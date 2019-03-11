const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');
require('dotenv').config();
const cors = require('@koa/cors');

initDB();

const app = new Koa();

app.listen(process.env.PORT || 9000);

app.on('error', err => {
  log.error('server error', err);
});

app.use(cors());
app.use(
  mount(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  )
);
