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
            if(name != null) {
                var page = {"name": name, "websiteId": vm.websiteId, "title":  title};
                PageService
                    .createPage(vm.websiteId, page)
                    .then(
                        function(response){
                            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
                        },
                        function(error){
                            vm.error = error.data;
                        }
                    )
            }else{
                vm.error = "Enter Page name";
            }
        }
    }
})();