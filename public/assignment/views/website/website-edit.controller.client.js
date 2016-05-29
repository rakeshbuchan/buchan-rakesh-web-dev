(function(){
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($location, WebsiteService, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();

        vm.updateWebsite = updateWebsite;
        
        function updateWebsite(name, websiteDescription){
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