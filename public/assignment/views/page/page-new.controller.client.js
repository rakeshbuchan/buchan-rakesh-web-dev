(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location, PageService, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        vm.createPage = function(name, title){
            var page = {"name" : name, "websiteId" : vm.websiteId};
            var newPage = PageService.createPage(vm.websiteId, page);
            if(newPage){
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
            }
        }
    }
})();