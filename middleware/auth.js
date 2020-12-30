const jwt = require("jsonwebtoken");
const Customer = require("../modals/customer");

const auth = async (req,res,next)=> {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token,process.env.JWT_KEY)
    try
    {
        const customer = await Customer.findOne({_id:data._id,'tokens.token': token})
        if(!customer)
        {
            throw new Error()
        }
        req.customer = customer
        req.token = token
        next()
    }
    catch (error)
    {
        res.status(401).send({error: "Not Authrization to this resource"})
    }
}


module.exports = auth;