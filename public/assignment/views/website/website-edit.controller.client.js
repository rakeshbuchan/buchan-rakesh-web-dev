(function(){
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($location, WebsiteService, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        function init() {
            WebsiteService
                .findWebsiteById(vm.websiteId)
                .then(
                    function(response){
                        vm.website = response.data;
                    }
                )
        }
        init();
        
        function updateWebsite(name, websiteDescription){
            var website = {"name" : name, "developerId" : vm.userId};
            WebsiteService
                .updateWebsite(vm.websiteId, vm.website)
                .then(
                    function(response){
                        $location.url("/user/" + vm.userId + "/website");
                    },
                    function(error){
                        vm.error = error.data;
                    }
                )
        }

        function deleteWebsite(websiteId) {
            WebsiteService
                .deleteWebsite(websiteId)
                .then(
                    function(response){
                        $location.url("/user/"+vm.userId+"/website");
                    },
                    function(error){
                        vm.error = error.data;
                    }
                )
            
        }
    }
})();