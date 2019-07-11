require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const app = {
  port: process.env.APP_PORT,
};

module.exports = app;
