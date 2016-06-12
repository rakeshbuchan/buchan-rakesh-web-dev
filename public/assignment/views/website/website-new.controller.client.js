(function(){
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);

    function NewWebsiteController($location, WebsiteService, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.userId;

        vm.createWebsite = createWebsite;
        
        function createWebsite(name, websiteDescription){
            if(name != null) {
                var website = {"name": name, "description": websiteDescription};
                WebsiteService
                    .createWebsite(vm.userId, website)
                    .then(
                        function (response) {
                            var newWebsite = response.body;
                            $location.url("/user/" + vm.userId + "/website");
                        },
                        function (error) {
                            vm.error = error.data;
                        }
                    )
            }else{
                vm.error = "Website Name Required";
            }
        }
        
    }
})();