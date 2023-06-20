import cors from 'cors';
import express from 'express';
import connect from './database/db.js';
import productRoutes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/products', productRoutes);

connect();

app.listen(PORT, () => {
    console.log(`Server UP running in http://localhost:${PORT}/`);
});