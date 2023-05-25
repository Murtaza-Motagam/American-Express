const express = require('express');
const Accholder = require('../models/Accholder')
const bcrypt = require('bcryptjs');
const Crypto = require('crypto')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'UserIsValidated';

// Route-1: Create a customer saving account 

router.post('/createaccount', [
    body('holdername', 'Enter your legal name').isLength({ min: 3 }),
    body('aadharno', 'Enter your  aadhar number').isLength({ max: 8 }),
    body('pancardno', 'Enter your pancard number').isLength({ max: 6 }),
    body('age', 'Enter your valid age above 18').isLength({ min: 2 }),
    body('accno'),
    body('CRN_No'),
    body('Mpin_No', 'Enter valid mpin number').isLength({ min: 6, max: 6 })
], async (req, res) => {

    let success = false;

    // If there are errors, return bad request and the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }

    // Wrapping the entire syntax in try and catch block to avoid error handling


    try {

        let holder = await Accholder.findOne({ holdername: req.body.holdername });
        let aadharno = await Accholder.findOne({ aadharno: req.body.aadharno });
        let pancardno = await Accholder.findOne({ pancardno: req.body.pancardno });

        if (holder) {
            return res.status(400).json({ success, error: "Sorry an Accountholder with this name already exists" });
        }
        else if (aadharno) {
            return res.status(400).json({ success, error: "Sorry Aadhar Details is not valid try with correct credentials." });
        }
        else if (pancardno) {
            return res.status(400).json({ success, error: "Sorry pancard Details is not valid try with correct credentials." });
        }

        function generateRandom(min = 101, max = 999) {

            // find diff
            let difference = max - min;

            // generate random number 
            let rand = Math.random();

            // multiply with difference 
            rand = Math.floor(rand * difference);

            // add with min value 
            rand = rand + min;

            return rand;
        }

        // Function to generate a CRN Number for the user to help them logged in.

        function generateCRN(min = 101, max = 999) {

            // find diff
            let difference = max - min;

            // generate random number 
            let rand = Math.random();

            // multiply with difference 
            rand = Math.floor(rand * difference);

            // add with min value 
            rand = rand + min;

            return rand;
        }

        const Account_No = ("200100100" + generateRandom())

        const crn_number = ("5000500" + generateCRN())

        const salt = await bcrypt.genSalt(10);
        const secMpin_No = await bcrypt.hash(req.body.Mpin_No, salt)


        holder = await Accholder.create({
            holdername: req.body.holdername,
            aadharno: req.body.aadharno,
            pancardno: req.body.pancardno,
            age: req.body.age,
            Mpin_No: secMpin_No,
            accno: Account_No,
            CRN_No: crn_number
        });

        const data = {
            holder: {
                id: holder.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);

        success = true;

        res.json({ success, authtoken, Account_No, crn_number });


    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})


// Route-2: Providing user Login Functionality

router.post('/login', [
    body('CRN_No', 'Enter your CRN Number'),
    body('Mpin_No', 'Enter your Mpin Number').exists()
], async (req, res) => {

    let success = false;

    // If there are errors, return bad request and the errors 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }

    const { CRN_No, Mpin_No } = req.body;
    // Wrapping the entire syntax in try and catch block to avoid error handling

    try {

        let holder = await Accholder.findOne({ CRN_No });


        if (!holder) {
            success = false;
            return res.status(400).json({ success, error: "please try to login with correct credentials" });
        }

        const mpinCompare =  bcrypt.compare(Mpin_No, holder.Mpin_No);

        if(!mpinCompare) {
            return res.status(400).json({ errror: "please try to login with correct credentials" });
        }

        else {
            
            const data = {
                holder: {
                    id: holder.id
                }
            }

            const authtoken = jwt.sign(data, JWT_SECRET);
            success = true;
            res.json({ success, authtoken, CRN_No });
        }

    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})

// Route-3: Fetch user entire data.

router.post('/getuser', fetchuser,  async (req, res) => {

    try {
 
       let userId = req.holder.id;
       const user = await Accholder.findById(userId).select("-Mpin_No");
       res.send([user]);
    } 
    catch (error) {
       console.error(error.message);
       res.status(500).send("Internal Server Error");
    }
 
 })



module.exports = router;