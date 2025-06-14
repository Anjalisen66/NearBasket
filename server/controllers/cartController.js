import User from "../models/User.js";

 
 //update cart : /api/cart/update
 export const updateCart = async (req,res) =>{
    try {
        const userId = req.user._id;
        const { cartItems } = req.body;
    await User.findByIdAndUpdate(userId , {cartItems})
    // console.log("saved cart items:",cartItems)
    // console.log("user:",userId)
    res.json({ success: true, message: "Cart Updated" })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
 }