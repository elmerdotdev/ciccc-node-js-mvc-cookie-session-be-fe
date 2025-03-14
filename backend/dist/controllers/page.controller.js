"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home = (req, res) => {
    res.status(200).send("Welcome to my server!");
};
const setCookie = (req, res) => {
    if (req.session) {
        req.session.message = "This is your cookie content 🍪";
    }
    res.status(200).json({
        message: "You got a cookie!!!"
    });
};
const checkCookie = (req, res) => {
    if (req.session && req.session.message) {
        res.status(200).json({
            content: req.session.message
        });
        return;
    }
    res.status(500).json({
        content: "No cookie found!"
    });
};
const clearCookie = (req, res) => {
    req.session = null;
    res.status(200).json({
        content: "Session cookie cleared!"
    });
};
exports.default = {
    home,
    setCookie,
    checkCookie,
    clearCookie
};
