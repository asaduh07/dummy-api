export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { accountNumber, otp, userId, token } = req.body;

  if (!userId || !token) {
    return res.status(400).json({ success: false, message: "Missing userid or token" });
  }
  if (token !== "abcd123#") {
    return res.status(400).json({ success: false, message: "Invalid user" });
  }

  if (!accountNumber || !otp) {
    return res.status(400).json({
      success: false,
      message: "accountNumber and otp are required"
    });
  }

  const response = {
    success: true,
    data: {
      accountNumber,
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

  res.status(200).json(response);
}
