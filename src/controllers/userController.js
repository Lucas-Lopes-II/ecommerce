const User = require("../models/User");

const register = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (e) {
        res.status(404).send(e);
    }
}

const login = async (req, res) => {
    const selectedUser = await User.findOne({ email: req.body.email });

    if (!selectedUser) return res.status(400).send("Email os Password incorrect")

    res.send("User logged")

}

module.exports = { register, login }