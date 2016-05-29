(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($location, WebsiteService, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();

        vm.updateWebsite = function(name, websiteDescription){
            var website = {"name" : name, "developerId" : vm.userId};
            var status = WebsiteService.updateWebsite(vm.websiteId, website);
            if(true){
                $location.url("/user/" + vm.userId + "/website");
            }
        }

        vm.deleteWebsite = deleteWebsite;

        function deleteWebsite(websiteId) {
            var result = WebsiteService.deleteWebsite(websiteId);
            if(result) {
                $location.url("/user/"+vm.userId+"/website");
            } 
        }
    }
})();