let mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
        trim: true 
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if(!validator.isEmail(value)){
                throw new Error({error: "Invalid Email address"});
            }
        }
    },
    password:
    {
        type: String,
        required: true,
        minlength: 8,
    },
    tokens:
    [{
        token: {
            type: String,
            required: true
        }
    }]
},{ versionKey: false });

UserSchema.pre('save', async function (next){
    const user =  this
    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

UserSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY,{expiresIn: 1440})
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

UserSchema.statics.findByCredentials = async (email,password) =>{
    const user = await Customer.findOne({email})
    if(!user)
    {
        throw new Error({error:"Invalid login credentials"})
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if(!isPasswordMatch)
    {
        throw new Error({error:"Invalid login credentials"})
    }
    return user
}

const Customer = mongoose.model('Customer',UserSchema, 'Customers');

module.exports = Customer;