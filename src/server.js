import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import productRoutes from './routes/product.routes.js';
import './database';

const app = express();


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
    })
});

app.use('/api/products', productRoutes);

app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
})