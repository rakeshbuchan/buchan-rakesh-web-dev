module.exports = function() {
    var mongoose = require("mongoose");

    var myWebsites = require("../website/website.schema.server.js")(mongoose);

    var UserSchema = mongoose.Schema({
        username: {type: String, required: true},
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        //websites: [{type: mongoose.Schema.ObjectId, ref: "Website"}],
        websites: [myWebsites],
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "assignment.user"});

    return UserSchema;
};