(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location, WebsiteService, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;

        vm.createWebsite = function(name, websiteDescription){
            var website = {"name" : name, "developerId" : vm.userId};
            var newWebsite = WebsiteService.createWebsite(vm.userId, website);
            if(newWebsite){
                $location.url("/user/" + vm.userId + "/website");
            }
        }
    }
})();