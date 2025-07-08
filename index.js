import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the dummy api")
});

app.post('/api/dummy/balance-inquiry', (req, res) => {
    const { accountNumber, otp,userId,token } = req.body;

    if(!userId || !token){
       return res.status(400).json({success:false,message:"MIssing userid or token"});
    }
    if(token!=="abcd123#"){
         return res.status(400).json({success:false,message:"Invalid user"});
    }

    console.log("Dummy Bank Balance API called with payload:", req.body);

    // Basic input check (optional for realism)
    if (!accountNumber || !otp) {
        return res.status(400).json({
            success: false,
            message: "accountNumber and otp are required"
        });
    }

    const response = {
        success: true,
        data: {
            accountNumber: accountNumber,
            accountHolder: "Rohit Sharma",
            balance: "₹45,230.75",
            currency: "INR",
            lastTransaction: {
                date: "2025-07-06",
                amount: "-₹2,000.00",
                description: "ATM Withdrawal"
            }
        }
    };

    res.json(response);
});


//middleware to handle 404 error
app.use((req, res) => {
    res.status(404).send("API not found")
});


const PORT = 3100;

app.listen(PORT, async () => {
    console.log(`Server is running at ${PORT}`);
    
});