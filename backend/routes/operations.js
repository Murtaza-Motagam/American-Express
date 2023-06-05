const express = require('express');
const Accholder = require('../models/Accholder')
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
var jwt = require('jsonwebtoken');


// Route-1: Transfer amount from one account to another (updating Balance from dual side in mongodb)

router.put('/updatebalance/:id', fetchuser, async (req, res) => {

    const { amount, accno } = req.body;

    let success = false;

    try {

        // create a new note object

        let getAccno = await Accholder.findOne({ accno });

        if (!getAccno) {
            success = false;
            return res.status(400).json({ success, error: "please try to transfer amount with correct credentials" });
        }

        else {

            let CreditAcc = getAccno.Balance;

            let newAmount = amount;

            let CreditAccDeposit = Number(CreditAcc) + Number(newAmount);

            getAccno = await Accholder.findOneAndUpdate({ accno }, {
                $set: {
                    Balance: CreditAccDeposit
                }
            }, { new: true });

            let userSideAcc = await Accholder.findById(req.params.id);

            let getBAmount = userSideAcc.Balance;

            let finalBalance = Number(getBAmount) - Number(newAmount);

            const updateBalance = await Accholder.findByIdAndUpdate(req.params.id, {
                $set: {
                    Balance: finalBalance
                }
            }, { new: true });


            if (updateBalance) {
                success = true;
                res.json({ success, getAccno, updateBalance });
            }
            else {
                res.json({ success, Message: "Sorry error occurred within api money has not been credited to given amount" });
            }
        }




    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
})

module.exports = router;