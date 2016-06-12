module.exports = function(app, models) {

    var userModel = models.userModel;

    app.post("/api/user", createUser);
    app.get("/api/user", getUsers);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);

    function createUser(req, res) {
        var newUser = req.body;
        userModel
            .findUserByUsername(newUser.username)
            .then(
                function (user) {
                    if (user) {
                        res.json(null);
                    }
                    else {
                        userModel
                            .createUser(newUser)
                            .then(
                                function (user) {
                                    res.json(user);
                                },
                                function (error) {
                                    res.statusCode(400).send(error);
                                }
                            )
                    }

                },
                function (error) {
                    res.statusCode(400).send(error);
                }
            )
    }

    function findUserById(req, res) {
        var userId = req.params.userId;
        userModel
            .findUserById(userId)
            .then(
                function (user) {
                    res.send(user);
                },
                function (error) {
                    res.statusCode(404).send(error);
                }
            )
    }

    function getUsers(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        if (username && password) {
            findUserByCredentials(username, password, res);
        } else if (username) {
            findUserByUsername(username, res);
        }
    }

    function findUserByCredentials(username, password, res) {
        userModel
            .findUserByCredentials(username, password)
            .then(
                function (user) {
                    res.json(user);
                },
                function (err) {
                    res.statusCode(404).send(err);
                }
            )
    }

    function findUserByUsername(username, res) {
        var username = req.params.username;
        userModel
            .findUserByUsername(username)
            .then(
                function (user) {
                    res.send(user);
                },
                function (error) {
                    res.statusCode(404).send(error);
                }
            )
    }

    function updateUser(req, res) {
        var id = req.params.userId;
        var newUser = req.body;
        userModel
            .updateUser(id, newUser)
            .then(
                function (stats) {
                    res.send(200);
                },
                function (error) {
                    res.statusCode(404).send(error);
                }
            );
    }

    function deleteUser(req, res) {
        var id = req.params.userId;
        userModel
            .deleteUser(id)
            .then(
                function (stats) {
                    res.send(200);
                },
                function (error) {
                    res.statusCode(404).send(error);
                }
            );
    }
}