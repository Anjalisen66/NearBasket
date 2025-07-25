import Address from "../models/Address.js";

//add address api : /api/address/add
export const addAddress = async (req,res) =>{
    try {
        const {address}  = req.body;
        const userId = req.user._id;

         await Address.create({...address , userId})
        console.log("saved address:",{address})

        res.json({ success: true, message: "Address added successfully" })
    } catch (error) {
         console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

//get addresses api : /api/address/getAddress
export const getAddresses = async (req,res) =>{
    try {
        const userId  = req.user._id;
        const addresses = await Address.find({userId})
        res.json({ success: true, addresses })
        
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}