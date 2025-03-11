import express from 'express';
import fs from 'fs';
import nunjucks from 'nunjucks';
import cookieParser from 'cookie-parser';
import session from 'express-session'

const app = express();
const port = 3000

app.use(express.urlencoded());
app.use(cookieParser())
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    cookie: {}
}));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

import PublicController from './src/controllers/PublicController.js';
app.use(PublicController);

import MovieController from './src/controllers/MovieController.js';
app.use(MovieController);

import AuthController from './src/controllers/AuthController.js';
app.use(AuthController);

  app.listen(port, () => {
    console.log(`example app listening on port http://localhost:${port}`)
  });
  