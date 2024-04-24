import express from 'express';
import customer from './api/customer';
import MyDB from './db';
import CustomerRepo from './repositories/customer';
const app = express();
const PORT = 8080;

app.use(express.json())

app.use('/api/customer', customer);

MyDB.getInstance();
CustomerRepo.getInstance();

app.listen(PORT, () => {
    console.log('The application is listening on port 3000!');
});

export default app;
