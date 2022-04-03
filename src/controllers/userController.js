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

module.exports = { register }