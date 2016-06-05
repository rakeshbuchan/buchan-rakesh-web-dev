module.exports = function(app) {

    var pages =[
        { "_id": "321", "name": "Post 1", "websiteId": "456" },
        { "_id": "432", "name": "Post 2", "websiteId": "456" },
        { "_id": "543", "name": "Post 3", "websiteId": "456" }
    ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var newPage = req.body;
        newPage._id = (new Date()).getTime()+"";
        newPage.websiteId = websiteId;
        pages.push(newPage);
        res.json(newPage);
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        var resultSet = [];
        for(var i in pages) {
            if(pages[i].websiteId === websiteId) {
                resultSet.push(pages[i]);
            }
        }
        res.send(resultSet);
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        for(var i in pages) {
            if(pages[i]._id === pageId) {
                res.send(pages[i]);
                return;
            }
        }
        res.send({});
    }

    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var page = req.body;
        for(var i in pages) {
            if(pages[i]._id === pageId) {
                pages[i].name = page.name;
                pages[i].websiteId = page.websiteId;
                res.send(200);
                return;
            }
        }
        res.sendStatus(400).sendStatus("Page with ID: "+ pageId +" could not be updated");
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        for(var i in pages) {
            if(pages[i]._id === pageId) {
                pages.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.sendStatus(400).sendStatus("Unable to delete Page with ID: "+ pageId);
    }
}