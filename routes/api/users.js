var express = require('express');
var router = express.Router();
var Users = require('../../models/users');
// GET/Read All
router.get('/', function (req, res, next) {
    Users.find({}, function (err, users) {
        if (err) {
            return res.json({ 'success': false, 'error': err });
        }
        return res.json({ 'success': true, 'users': users });
    });
});
// Get/Read One
router.get('/:userId', function (req, res) {

    var userId = req.params.userId;
    Users.findOne({ '_id': userId }, function (err, user) {
        if (err) {
            return res.json({ 'success': false, 'error': err });
        }
        return res.json({ 'success': true, 'user': user });
    });
});
// Post/Create



module.exports = router;