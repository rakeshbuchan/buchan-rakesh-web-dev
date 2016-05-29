(function(){
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($location, WebsiteService, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;

        vm.createWebsite = createWebsite;
        
        function createWebsite(name, websiteDescription){
            var website = {"name" : name, "developerId" : vm.userId};
            var newWebsite = WebsiteService.createWebsite(vm.userId, website);
            if(newWebsite){
                $location.url("/user/" + vm.userId + "/website");
            }
        }
    }
})();