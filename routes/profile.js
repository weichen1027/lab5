var data = require('../data.json');

exports.viewProfile = function(req, res) {
    // controller code goes here 
    var name = req.params.name;
    var profile = -1;

    for(var friend in data['friends']) {
        if(data['friends'][friend]['name'] == name) {
            profile = friend;
            break;
        }
    }

    res.render('profile', data['friends'][profile]);
};