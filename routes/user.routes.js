const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        uid: req.body.uid,
        premium: false,
        suscription: '',
        customer: ''
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({success: false, msg:'Falló la registración del usuario'});
        } else {
            res.json({success: true, msg:'Ahora estás registrado y puedes iniciar sesión'});
        }
    });
});

router.get('/user/:uid', (req, res, next) => {
    User.getUser(req, (err, user) => {
        if (err) {
            res.json({success: false, msg:'Falló la consulta'});
        } else {
            res.json({user});
        }
    });
})

module.exports = router;