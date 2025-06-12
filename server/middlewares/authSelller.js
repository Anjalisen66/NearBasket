import jwt from 'jsonwebtoken'

const authSeller = async (req, res, next)=> {
    const { sellerToken } = req.cookies;

    if (!sellerToken) {
        return res.status(401).json({ success: false, message: "Not Authorized" });
    }

    try {
        const decoded = jwt.verify(sellerToken, process.env.JWT_SECRET);
        if (decoded.email === process.env.Seller_email) {
            next()
        }
    } catch (err) {
        console.log("JWT error:", err.message);
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
}

export default authSeller
