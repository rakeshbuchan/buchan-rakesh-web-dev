(function(){
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController);

    function NewPageController($location, PageService, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        vm.createPage = createPage;
            
        function createPage(name, title){
            var page = {"name" : name, "websiteId" : vm.websiteId};
            var newPage = PageService.createPage(vm.websiteId, page);
            if(newPage){
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
            }
        }
    }
})();