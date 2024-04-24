
import MyDB from "../db";

class CustomerRepo {
    private static instance: CustomerRepo | null = null;
    private db: MyDB
    private constructor() {
        this.db = MyDB.getInstance()
    }

    public static getInstance() {
        if(!CustomerRepo.instance) {
            CustomerRepo.instance = new CustomerRepo();
        }
        return CustomerRepo.instance;
    }

    public async getCustomers() {
        const sql = "SELECT * FROM Customers";
        const results = await this.db.executeQuery(sql);
        return results.length ? results : null;
    }
}




export default CustomerRepo;