import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import productRoutes from './routes/product.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import './database';
import { createRoles, createAdmin } from './libs/initialSetup.js';

const app = express();
createRoles();
createAdmin();

app.set('port', 5000);
app.set('pkg', pkg);
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const {
    name,
    version,
    description,
    author
  } = pkg;
  res.json({
    name,
    version,
    description,
    author
  });
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`);
});
