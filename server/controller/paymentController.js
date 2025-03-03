const { Payment } = require("../models/pymentModels");


const addPayment = async (req ,res) => {
const {  email,  code , program,Country,
    PhoneNum,phonePrefix,paymentMethod,
    nameOfCard, numOfCard,month,year,
 }= req.body
    try {
        console.log(req.body);
        
        const result = await Payment.create(req.body)
        res.json(result);
        console.log(result)
      } catch (err) {
        res.status(500).json({ error: err.message });
      }

    };

module.exports = {addPayment}
