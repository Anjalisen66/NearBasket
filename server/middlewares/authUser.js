import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    console.log("No token found in cookies");
    return res.status(401).json({ success: false, message: "Not Authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    req.user = { _id: decoded.id };
    next(); // proceed only if verified
  } catch (err) {
    console.log("JWT error:", err.message);
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default authUser;
