import Order from "../models/Order.js";
import Product from "../models/Product.js";

// orderplace COD api : /api/order/COD
export const placeOrderCOD = async (req,res) =>{
    try {
        const userId = req.user._id;
        const { items , address } = req.body;
        if(!address || items.length === 0 ){
        res.json({ success: false, message: "Invalid Data" })
        }
        // caluclate amt using items 
        let amount = await items.reduce(async (acc,item) =>{
            const product = await Product.findById(item.product);
            return (await acc) + product.offerPrice * item.quantity;
        }, 0)
        //adding tax 
        amount += Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: 'COD'
        });
        res.json({ success: true, message: "Order placed successfully" })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

//get orders by id : /api/order/user
export const getUserOrder = async (req,res)=>{
    try {
        const userId = req.user._id;
        const orders = await Order.find({
         userId,
         $or: [{paymentType:'COD'},{isPaid: true}]
        }).populate("items.product address").sort({createdAt:-1});
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

//get all orders for seller/admin : /api/order/seller
export const getAllOrders = async (req,res)=>{
    try {
        const orders = await Order.find({
         $or: [{paymentType:'COD'},{isPaid: true}]
        }).populate("items.product address").sort({createdAt:-1});
        res.json({ success: true, orders })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}