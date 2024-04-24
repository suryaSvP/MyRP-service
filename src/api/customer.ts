import express from 'express';
import CustomerRepo from '../repositories/customer';
const router = express.Router();
const customerRepo = CustomerRepo.getInstance();

router.get('/', async (req, res) => {
    let customers = await customerRepo.getCustomers();
    res.send(customers);
});

router.post('/', (req, res) => {
    res.send(req.body);
});

export default router;